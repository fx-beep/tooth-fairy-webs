import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { toast } from "sonner";
import { LogOut, Lock, RefreshCw, Trash2, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — ADH Dentistry" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AdminPage,
});

type Appointment = {
  id: string;
  full_name: string;
  phone: string;
  email: string | null;
  service: string;
  preferred_date: string | null;
  message: string | null;
  status: string;
  created_at: string;
};

function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const refreshAuth = async () => {
    setLoading(true);
    const { data } = await supabase.auth.getUser();
    const user = data.user;
    if (!user) {
      setUserEmail(null);
      setIsAdmin(false);
      setLoading(false);
      return;
    }
    setUserEmail(user.email ?? null);
    // Try to fetch appointments — RLS will allow only admins.
    const { error } = await supabase.from("appointments").select("id").limit(1);
    setIsAdmin(!error);
    setLoading(false);
  };

  useEffect(() => {
    refreshAuth();
    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      refreshAuth();
    });
    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <RefreshCw className="h-5 w-5 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!userEmail) return <LoginForm />;
  if (!isAdmin) return <NoAccess email={userEmail} />;
  return <Dashboard email={userEmail} />;
}

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setSubmitting(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Signed in");
  };

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-6 py-16">
      <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
        <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Lock className="h-5 w-5" />
        </div>
        <h1 className="mt-4 text-center font-display text-2xl font-semibold">Admin sign in</h1>
        <p className="mt-1 text-center text-sm text-muted-foreground">
          Restricted to ADH Dentistry staff.
        </p>
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium" htmlFor="email">Email</label>
            <input
              id="email" type="email" value={email} required
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="pwd">Password</label>
            <input
              id="pwd" type="password" value={password} required
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none"
            />
          </div>
          <button
            type="submit" disabled={submitting}
            className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground disabled:opacity-60"
          >
            {submitting ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </section>
  );
}

function NoAccess({ email }: { email: string }) {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-md flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="font-display text-2xl font-semibold">No admin access</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {email} doesn't have permission to view appointments.
      </p>
      <button
        onClick={() => supabase.auth.signOut()}
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-input px-5 py-2 text-sm"
      >
        <LogOut className="h-4 w-4" /> Sign out
      </button>
    </section>
  );
}

function Dashboard({ email }: { email: string }) {
  const [items, setItems] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("appointments")
      .select("*")
      .order("created_at", { ascending: false });
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    setItems(data as Appointment[]);
  };

  useEffect(() => { load(); }, []);

  const setStatus = async (id: string, status: string) => {
    const { error } = await supabase.from("appointments").update({ status }).eq("id", id);
    if (error) return toast.error(error.message);
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, status } : i)));
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this appointment?")) return;
    const { error } = await supabase.from("appointments").delete().eq("id", id);
    if (error) return toast.error(error.message);
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-semibold">Appointments</h1>
          <p className="mt-1 text-sm text-muted-foreground">Signed in as {email}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={load}
            className="inline-flex items-center gap-2 rounded-full border border-input px-4 py-2 text-sm hover:border-primary"
          >
            <RefreshCw className="h-4 w-4" /> Refresh
          </button>
          <button
            onClick={() => supabase.auth.signOut()}
            className="inline-flex items-center gap-2 rounded-full border border-input px-4 py-2 text-sm hover:border-primary"
          >
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <RefreshCw className="h-5 w-5 animate-spin text-muted-foreground" />
          </div>
        ) : items.length === 0 ? (
          <div className="py-16 text-center text-sm text-muted-foreground">
            No appointment requests yet.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary/60 text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-4 py-3">Submitted</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Contact</th>
                  <th className="px-4 py-3">Service</th>
                  <th className="px-4 py-3">Preferred</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {items.map((a) => (
                  <tr key={a.id} className="border-t border-border align-top">
                    <td className="px-4 py-3 text-xs text-muted-foreground">
                      {new Date(a.created_at).toLocaleString()}
                    </td>
                    <td className="px-4 py-3 font-medium">{a.full_name}</td>
                    <td className="px-4 py-3">
                      <div>{a.phone}</div>
                      {a.email && <div className="text-xs text-muted-foreground">{a.email}</div>}
                    </td>
                    <td className="px-4 py-3">
                      {a.service}
                      {a.message && (
                        <div className="mt-1 max-w-xs text-xs text-muted-foreground">
                          “{a.message}”
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3 text-xs">{a.preferred_date ?? "—"}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                          a.status === "confirmed"
                            ? "bg-primary/15 text-primary"
                            : a.status === "cancelled"
                              ? "bg-destructive/15 text-destructive"
                              : "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        {a.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1">
                        {a.status !== "confirmed" && (
                          <button
                            onClick={() => setStatus(a.id, "confirmed")}
                            title="Mark confirmed"
                            className="rounded-md p-1.5 hover:bg-secondary"
                          >
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                          </button>
                        )}
                        <button
                          onClick={() => remove(a.id)}
                          title="Delete"
                          className="rounded-md p-1.5 hover:bg-secondary"
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

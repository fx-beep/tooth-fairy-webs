
-- Restrict has_role: only used inside RLS / triggers as superuser context anyway
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, app_role) FROM PUBLIC, anon, authenticated;

-- Tighten the open INSERT policy with a validation trigger
DROP POLICY "Anyone can submit appointments" ON public.appointments;

CREATE POLICY "Anyone can submit appointments"
ON public.appointments FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(trim(full_name)) BETWEEN 2 AND 120
  AND length(trim(phone)) BETWEEN 5 AND 30
  AND length(trim(service)) BETWEEN 2 AND 120
  AND (email IS NULL OR email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$')
  AND status = 'pending'
);

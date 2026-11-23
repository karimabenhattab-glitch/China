// Eintragen aus Supabase: Project Settings > API.
// Der anon public key ist für den Browser gedacht und darf hier stehen,
// weil die Zugriffsregeln in schema.sql die Daten schützen.
// Niemals den service_role key hier eintragen oder weitergeben.
window.APP_CONFIG = {
  SUPABASE_URL: "https://xncbhgxajnvsbcxljjwb.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhuY2JoZ3hham52c2JjeGxqandiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTUwOTE1MjcsImV4cCI6MjExMDY2NzUyN30.8rKVt32cPQH7nfRKZqyoXZaDu0sLFC0npxETuzuJ0nA ist der anon"
};

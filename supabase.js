// supabase.js
// IMPORTANT: Must use window.supabaseClient (not plain const)
// so that UserProfile.js and all other pages can access it.
const { createClient } = window.supabase;

window.supabaseClient = createClient(
    'https://zvfxmxbavsjzxaohfbmj.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2ZnhteGJhdnNqenhhb2hmYm1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0MDE3NTEsImV4cCI6MjA5MDk3Nzc1MX0.XLm9Uh6xS3bdCfIe7kgbWPo-5R0HlvJ6KGqUaQV6gvk'
);

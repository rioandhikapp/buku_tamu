import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm"

const supabase = createClient(
    "https://pcbzxapkjahdnmlpzscx.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjYnp4YXBramFoZG5tbHB6c2N4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5MTU0MDcsImV4cCI6MjA2NTQ5MTQwN30.eZmuw9ioVIqhaTBbEZkmbmDJAVwsMRqPf7bRBoaqY94"
)

async function simpanData() {
    const nama = document.getElementById("nama").value;
    const username_ig = document.getElementById("username_ig").value;

    const { data, error } = await supabase.from("buku_tamu").insert([{ nama, username_ig }]);

    if (error) return alert("Gagal memasukkan data " + error.message)
    alert("Data berhasil ditambahkan")
}

window.simpanData = simpanData;
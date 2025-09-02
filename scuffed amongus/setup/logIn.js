const supabaseUrl = 'https://lxkskgajaswnfcobtyrk.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4a3NrZ2FqYXN3bmZjb2J0eXJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQzODA1OTgsImV4cCI6MjA0OTk1NjU5OH0.K6-4UdTejF0b0rWiDf_NkayQBsikMJnRrcFJiVU2DBY";
const supabaseData = {
    access_token: null,
    uuid: null
}

// Supabase login function
async function logInToSupabase(email, password) {
    try {
        const response = await fetch(`${supabaseUrl}/auth/v1/token?grant_type=password`, {
            method: "POST",
            headers: {
                "apikey": supabaseKey,
                "Authorization": `Bearer ${supabaseKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        if (!response.ok) {
            const errorData = await response.json();
            console.error("Login failed:", errorData);
            alert(`Login failed: ${errorData.error_description || errorData.message}`);
            logIn();
            return null;
        }
        const data = await response.json();
        console.log("Login successful:", data);
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("uuid", data.user.id);
        localStorage.setItem("expires_in", Date.now() + 70000000);
        window.location.reload();
        return data;
    } 
    catch (err) {
        console.error("Unexpected error:", err);
        alert("An unexpected error occurred. Please try again");
        logIn();
        return null;
    }
}

//get userdata
async function logIn() {
    if(localStorage.getItem("expires_in") > Date.now()){
        getAndSetData();
        return;
    }

    const email = prompt("Please enter your email:");
    const password = prompt("Please enter your password:");
    
    if (!email || !password) {
        alert("Email and password cannot be empty.");
        return;
    }
    else{
        logInToSupabase(email, password);
    }
}

logIn();

function getAndSetData(){
    supabaseData.access_token = localStorage.getItem("access_token");
    supabaseData.uuid = localStorage.getItem("uuid");
    console.log("logged in")
}
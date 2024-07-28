var editor = CodeMirror.fromTextArea(document.getElementById('code-editor'), {
    mode: "terraform",
    lineNumbers: true,
    theme: "default"
});

function logout() {
    // Handle logout
    console.log('Logged out');
    window.location.href = '/'; // Redirect to landing page
}

function saveCode() {
    // Save code logic
    console.log('Code saved');
}

function runTerraform() {
    // Run Terraform commands
    console.log('Running Terraform...');
    // Display output in output-display element
}

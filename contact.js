// contact.js
class ContactForm {
  constructor(formId) {
    this.form = document.getElementById(formId);
    if (!this.form) {
      throw new Error(`Form with id "${formId}" not found`);
    }
    this.init();
  }

  init() {
    this.form.addEventListener("submit", (e) => this.handleSubmit(e));
  }

  async handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(this.form);

   
    for (let [name, value] of formData.entries()) {
      if (!value.trim()) {
        this.showError(`Please fill out the "${name}" field.`);
        return; 
      }
    }

    try {
      const response = await fetch(this.form.action, {
        method: this.form.method,
        body: formData,
        headers: { "Accept": "application/json" }
      });

      if (response.ok) {
        this.showSuccess();
        this.form.reset();
      } else {
        this.showError("There was a problem sending your message.");
      }
    } catch (error) {
      this.showError(error.message);
    }
  }

  showSuccess() {
    alert("✅ Your message has been sent!");
  }

  showError(message) {
    alert(`❌ Error: ${message}`);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new ContactForm("contactForm");
});

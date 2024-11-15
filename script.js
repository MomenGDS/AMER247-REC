// Initialize service data
let serviceData = {};

// Load services from localStorage or initialize with default data
function loadServices() {
    const storedData = localStorage.getItem('serviceData');
    if (storedData) {
        serviceData = JSON.parse(storedData);
    } else {
        // Default services with all initial entries and bolded text
        serviceData = {
            "medical-id": {
                title: "Medical Examination and Emirates ID",
                documents: [
                    "Copy of valid <strong>Passport</strong>",
                    "Clear <strong>Visa</strong> or <strong>Entry Permit</strong> copy",
                    "Recent <strong>Passport-sized Photograph</strong> with white background"
                ]
            },
            "visa-stamping": {
                title: "Visa Stamping",
                documents: [
                    "Original <strong>Passport</strong>",
                    "Recent <strong>Passport-sized Photograph</strong> with white background",
                    "Copy of <strong>Medical Fitness Certificate</strong>",
                    "Valid <strong>Entry Permit</strong> copy",
                    "Completed <strong>Visa Application Form</strong>"
                ]
            },
            "entry-permit-employee": {
                title: "Entry Permit for Employee",
                documents: [
                    "Copy of valid <strong>Passport</strong> (minimum 6 months validity)",
                    "<strong>Employment Contract</strong> or <strong>Job Offer Letter</strong>",
                    "Attested <strong>Educational Certificates</strong> (if applicable)",
                    "<strong>Medical Fitness Certificate</strong>",
                    "Recent <strong>Passport-sized Photograph</strong> with white background"
                ]
            },
            "entry-permit-family": {
                title: "Entry Permit for Family",
                documents: [
                    "Sponsor's <strong>Passport Copy</strong> and <strong>Residence Visa</strong>",
                    "Sponsor's <strong>Emirates ID</strong>",
                    "Attested <strong>Marriage Certificate</strong> (for spouse)",
                    "Attested <strong>Birth Certificates</strong> (for children)",
                    "Family members' <strong>Passport Copies</strong> (minimum 6 months validity)",
                    "Recent <strong>Passport-sized Photographs</strong> of family members"
                ]
            },
            "newborn-visa": {
                title: "Newborn Visa",
                documents: [
                    "Newborn's <strong>Passport Copy</strong>",
                    "Attested and translated <strong>Birth Certificate</strong>",
                    "Newborn's <strong>Passport-sized Photograph</strong> with white background",
                    "Sponsor's <strong>Emirates ID</strong>",
                    "Sponsor's <strong>Passport Copy</strong>",
                    "Valid <strong>Tenancy Contract (Ejari)</strong>",
                    "Mother's <strong>Visa Copy</strong>",
                    "Sponsor's <strong>IBAN Number</strong>"
                ]
            },
            "family-visa": {
                title: "Family Visa",
                documents: [
                    "Sponsor's <strong>Emirates ID</strong>",
                    "Sponsor's <strong>Passport Copy</strong>",
                    "Valid <strong>Tenancy Contract</strong>",
                    "Updated <strong>Salary Certificate</strong> or <strong>Labor Contract</strong>",
                    "Attested <strong>Marriage Certificate</strong>",
                    "Spouse's <strong>Passport Copy</strong> and <strong>Photograph</strong>",
                    "Children's <strong>Passport Copies</strong> and <strong>Birth Certificates</strong>"
                ]
            },
            "visa-renewal": {
                title: "Visa Renewal",
                documents: [
                    "Original <strong>Passport</strong>",
                    "Current <strong>Visa Copy</strong>",
                    "Sponsor's <strong>Emirates ID</strong>",
                    "<strong>Medical Fitness Certificate</strong> (for applicants over 18)",
                    "Valid <strong>Health Insurance</strong>",
                    "Updated <strong>Labor Contract</strong> or <strong>Salary Certificate</strong>"
                ]
            },
            "parent-sponsorship": {
                title: "Parent Sponsorship",
                documents: [
                    "Sponsor's <strong>Emirates ID</strong>",
                    "Sponsor's <strong>Passport Copy</strong>",
                    "Updated <strong>Salary Certificate</strong> (minimum salary requirement)",
                    "Valid <strong>Tenancy Contract</strong> (minimum 2-bedroom)",
                    "Parents' <strong>Passport Copies</strong>",
                    "Attested <strong>Birth Certificate</strong> (proof of relationship)",
                    "<strong>No Objection Certificate</strong> from home country (attested)",
                    "Sponsor's <strong>6-month Bank Statement</strong>",
                    "Sponsor's <strong>IBAN Number</strong>"
                ]
            },
            "cancel-family-residency": {
                title: "Cancel Family Residency",
                documents: [
                    "Family members' <strong>Original Passports</strong>",
                    "Family members' <strong>Original Emirates IDs</strong>",
                    "Sponsor's <strong>Passport Copy</strong>",
                    "Sponsor's <strong>Emirates ID</strong>"
                ]
            },
            "employee-visa-cancellation": {
                title: "Employee Visa Cancellation",
                documents: [
                    "Employee's <strong>Original Passport</strong>",
                    "Employee's <strong>Labor Card</strong>",
                    "Sponsor's <strong>Trade License Copy</strong>",
                    "Sponsor's <strong>Immigration Card Copy</strong>",
                    "Completed <strong>Cancellation Form</strong> signed and stamped"
                ]
            },
            "extend-on-arrival-visa": {
                title: "Extend On-Arrival Visa",
                documents: [
                    "Visitor's <strong>Original Passport</strong>",
                    "Current <strong>Visit Visa Copy</strong>",
                    "Proof of <strong>Onward Travel</strong> (if applicable)"
                ]
            },
            "new-establishment-card": {
                title: "New Establishment Card",
                documents: [
                    "Copy of <strong>Trade License</strong> with barcode",
                    "Copy of <strong>Memorandum of Association</strong>",
                    "Owner's <strong>Passport Copy</strong> and <strong>Emirates ID</strong>",
                    "Valid <strong>Tenancy Contract (Ejari)</strong>"
                ]
            },
            "renew-establishment-card": {
                title: "Establishment Card Renewal",
                documents: [
                    "Copy of renewed <strong>Trade License</strong> with barcode",
                    "Copy of <strong>Memorandum of Association</strong>",
                    "Owner's <strong>Passport Copy</strong> and <strong>Emirates ID</strong>",
                    "Valid <strong>Tenancy Contract (Ejari)</strong>"
                ]
            },
            "exit-permit": {
                title: "Exit Permit",
                documents: [
                    "Visitor's <strong>Original Passport</strong>",
                    "Copy of <strong>Overstayed Visa</strong>",
                    "Proof of <strong>Booked Flight Ticket</strong>",
                    "Payment of applicable <strong>Fines</strong>"
                ]
            },
            "outpass": {
                title: "Outpass",
                documents: [
                    "Individual's <strong>Passport Copy</strong>",
                    "Copy of <strong>Overstayed Visa</strong>",
                    "Recent <strong>Passport-sized Photograph</strong>",
                    "Completed <strong>Outpass Application Form</strong>"
                ]
            },
            "partner-investor-visa": {
                title: "Partner or Investor Visa",
                documents: [
                    "Partner's <strong>Passport Copy</strong>",
                    "Copy of <strong>Trade License</strong>",
                    "Copy of <strong>Memorandum of Association</strong>",
                    "Recent <strong>Passport-sized Photograph</strong>",
                    "<strong>Immigration Establishment Card</strong>",
                    "Valid <strong>Medical Fitness Certificate</strong>",
                    "Valid <strong>Health Insurance</strong>"
                ]
            },
            "housemaid-visa": {
                title: "Housemaid Visa",
                documents: [
                    "Sponsor's <strong>Emirates ID</strong>",
                    "Sponsor's <strong>Passport Copy</strong> and <strong>Visa Copy</strong>",
                    "Valid <strong>Tenancy Contract</strong>",
                    "Updated <strong>Salary Certificate</strong> (minimum salary requirement)",
                    "Housemaid's <strong>Passport Copy</strong> (minimum 6 months validity)",
                    "Housemaid's <strong>Passport-sized Photograph</strong>",
                    "Attested <strong>Affidavit</strong> (if applicable)"
                ]
            },
            "family-visit-visa": {
                title: "Family Visit Visa",
                documents: [
                    "Sponsor's <strong>Emirates ID</strong>",
                    "Sponsor's <strong>Passport Copy</strong> and <strong>Visa Copy</strong>",
                    "Visitor's <strong>Passport Copy</strong> (minimum 6 months validity)",
                    "Attested <strong>Proof of Relationship</strong>",
                    "Sponsor's <strong>Employment Contract</strong> or <strong>Salary Certificate</strong>",
                    "Valid <strong>Travel Insurance</strong>",
                    "Visitor's <strong>Passport-sized Photograph</strong>"
                ]
            }
        };
        saveServices();
    }
    populateServiceOptions();
}

// Save services to localStorage
function saveServices() {
    localStorage.setItem('serviceData', JSON.stringify(serviceData));
}

// Populate the service dropdown
function populateServiceOptions() {
    const servicesSelect = document.getElementById('services');
    servicesSelect.innerHTML = '<option value="">-- Select a service --</option>';
    for (const key in serviceData) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = serviceData[key].title;
        servicesSelect.appendChild(option);
    }
}

// Display documents for the selected service
function showDocuments() {
    const selectedService = document.getElementById("services").value;
    const displaySection = document.getElementById("document-display");
    const documentList = document.getElementById("document-list");
    const serviceTitle = document.getElementById("service-title");

    if (selectedService && serviceData[selectedService]) {
        displaySection.style.display = "block";
        displaySection.classList.add('show');
        serviceTitle.textContent = serviceData[selectedService].title;

        let documentsHTML = '<ul>';
        serviceData[selectedService].documents.forEach((doc, index) => {
            documentsHTML += `
                <li style="animation-delay: ${(index * 0.1)}s">
                    <i class="fas fa-file-alt"></i> ${doc}
                </li>`;
        });
        documentsHTML += '</ul>';
        documentList.innerHTML = documentsHTML;
    } else {
        displaySection.style.display = "none";
        displaySection.classList.remove('show');
        documentList.innerHTML = "";
    }
}

// Open the service form modal
let formMode = 'add'; // 'add' or 'edit'

function openServiceForm(mode) {
    formMode = mode;
    const modal = document.getElementById('service-form-modal');
    const formTitle = document.getElementById('form-title');
    const serviceNameInput = document.getElementById('service-name');
    const documentsContainer = document.getElementById('documents-container');
    serviceNameInput.value = '';
    documentsContainer.innerHTML = '';

    if (mode === 'add') {
        formTitle.textContent = 'Add Service';
        addDocumentField();
    } else if (mode === 'edit') {
        const selectedService = document.getElementById("services").value;
        if (!selectedService) {
            alert('Please select a service to edit.');
            return;
        }
        formTitle.textContent = 'Edit Service';
        const service = serviceData[selectedService];
        serviceNameInput.value = service.title;
        service.documents.forEach(doc => addDocumentField(doc.replace(/<strong>|<\/strong>/g, '')));
    }

    modal.style.display = 'block';
}

// Close the service form modal
function closeServiceForm() {
    const modal = document.getElementById('service-form-modal');
    modal.style.display = 'none';
}

// Add a document input field
function addDocumentField(value = '') {
    const documentsContainer = document.getElementById('documents-container');
    const div = document.createElement('div');
    div.className = 'document-input';
    const input = document.createElement('input');
    input.type = 'text';
    input.value = value;
    input.required = true;
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'remove-button';
    removeButton.innerHTML = '&times;';
    removeButton.onclick = () => documentsContainer.removeChild(div);
    div.appendChild(input);
    div.appendChild(removeButton);
    documentsContainer.appendChild(div);
}

// Save the new or edited service
function saveService(event) {
    event.preventDefault();
    const serviceNameInput = document.getElementById('service-name');
    const documentsContainer = document.getElementById('documents-container');
    const documentInputs = documentsContainer.getElementsByTagName('input');

    if (serviceNameInput.value.trim() === '') {
        alert('Service name cannot be empty.');
        return;
    }

    if (documentInputs.length === 0) {
        alert('Please add at least one document.');
        return;
    }

    const documents = [];
    for (let input of documentInputs) {
        if (input.value.trim() !== '') {
            documents.push(input.value.trim());
        }
    }

    if (documents.length === 0) {
        alert('Please add at least one document.');
        return;
    }

    const serviceKey = serviceNameInput.value.toLowerCase().replace(/\s+/g, '-');

    if (formMode === 'add') {
        if (serviceData[serviceKey]) {
            alert('A service with this name already exists.');
            return;
        }
    } else if (formMode === 'edit') {
        const selectedService = document.getElementById("services").value;
        delete serviceData[selectedService];
    }

    serviceData[serviceKey] = {
        title: serviceNameInput.value.trim(),
        documents: documents
    };

    saveServices();
    populateServiceOptions();
    closeServiceForm();
    document.getElementById('services').value = serviceKey;
    showDocuments();
}

// Delete a service
function deleteService() {
    const selectedService = document.getElementById("services").value;
    if (!selectedService) {
        alert('Please select a service to delete.');
        return;
    }
    if (confirm(`Are you sure you want to delete the service "${serviceData[selectedService].title}"?`)) {
        delete serviceData[selectedService];
        saveServices();
        populateServiceOptions();
        showDocuments();
    }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('service-form-modal');
    if (event.target == modal) {
        closeServiceForm();
    }
}

// Initialize the app
loadServices();

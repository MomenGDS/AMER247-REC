// Initialize service data
let serviceData = {};

// Language variable
let currentLanguage = 'en';

// Admin mode flag
let isAdmin = false;

// Translations object
const translations = {
    en: {
        headerTitle: 'Amer247 Document Guide',
        headerSubtitle: 'Select a service to view the required documents before proceeding to the counter.',
        chooseService: 'Choose a Service:',
        addService: 'Add Service',
        editService: 'Edit Service',
        deleteService: 'Delete Service',
        serviceName: 'Service Name:',
        requiredDocuments: 'Required Documents:',
        addDocument: 'Add Document',
        notes: 'Notes:',
        addNote: 'Add Note',
        saveService: 'Save Service',
        cancel: 'Cancel',
        adminLogin: 'Admin Login',
        password: 'Password:',
        login: 'Login',
        selectLanguage: 'Select Language',
        adminButton: 'Admin',
        serviceDeleted: 'Service deleted successfully.',
        confirmDelete: 'Are you sure you want to delete the service',
        pleaseSelectService: 'Please select a service to edit.',
        serviceExists: 'A service with this name already exists.',
        serviceNameEmpty: 'Service name cannot be empty.',
        addAtLeastOneDocument: 'Please add at least one document.',
        passwordIncorrect: 'Incorrect password. Please try again.',
        pleaseSelectServiceToDelete: 'Please select a service to delete.',
        languageSelection: 'Select Language / اللغة / زبان منتخب کریں',
    },
    ar: {
        headerTitle: 'دليل وثائق عامر 247',
        headerSubtitle: 'اختر خدمة لعرض المستندات المطلوبة قبل التوجه إلى المنضدة.',
        chooseService: 'اختر خدمة:',
        addService: 'إضافة خدمة',
        editService: 'تعديل خدمة',
        deleteService: 'حذف خدمة',
        serviceName: 'اسم الخدمة:',
        requiredDocuments: 'المستندات المطلوبة:',
        addDocument: 'إضافة مستند',
        notes: 'ملاحظات:',
        addNote: 'إضافة ملاحظة',
        saveService: 'حفظ الخدمة',
        cancel: 'إلغاء',
        adminLogin: 'تسجيل دخول المشرف',
        password: 'كلمة المرور:',
        login: 'تسجيل الدخول',
        selectLanguage: 'اختر اللغة',
        adminButton: 'مشرف',
        serviceDeleted: 'تم حذف الخدمة بنجاح.',
        confirmDelete: 'هل أنت متأكد أنك تريد حذف الخدمة',
        pleaseSelectService: 'يرجى اختيار خدمة للتعديل.',
        serviceExists: 'خدمة بهذا الاسم موجودة بالفعل.',
        serviceNameEmpty: 'لا يمكن أن يكون اسم الخدمة فارغًا.',
        addAtLeastOneDocument: 'يرجى إضافة مستند واحد على الأقل.',
        passwordIncorrect: 'كلمة المرور غير صحيحة. حاول مرة أخرى.',
        pleaseSelectServiceToDelete: 'يرجى اختيار خدمة للحذف.',
        languageSelection: 'اختر اللغة / Select Language / زبان منتخب کریں',
    },
    ur: {
        headerTitle: 'امیر 247 دستاویزات گائیڈ',
        headerSubtitle: 'کاؤنٹر پر جانے سے پہلے مطلوبہ دستاویزات دیکھنے کے لیے ایک سروس منتخب کریں۔',
        chooseService: 'ایک سروس منتخب کریں:',
        addService: 'سروس شامل کریں',
        editService: 'سروس میں ترمیم کریں',
        deleteService: 'سروس حذف کریں',
        serviceName: 'سروس کا نام:',
        requiredDocuments: 'ضروری دستاویزات:',
        addDocument: 'دستاویز شامل کریں',
        notes: 'نوٹس:',
        addNote: 'نوٹ شامل کریں',
        saveService: 'سروس محفوظ کریں',
        cancel: 'منسوخ کریں',
        adminLogin: 'ایڈمن لاگ ان',
        password: 'پاس ورڈ:',
        login: 'لاگ ان',
        selectLanguage: 'زبان منتخب کریں',
        adminButton: 'ایڈمن',
        serviceDeleted: 'سروس کامیابی سے حذف ہو گئی۔',
        confirmDelete: 'کیا آپ واقعی سروس کو حذف کرنا چاہتے ہیں',
        pleaseSelectService: 'براہ کرم ترمیم کے لیے ایک سروس منتخب کریں۔',
        serviceExists: 'اس نام کی ایک سروس پہلے سے موجود ہے۔',
        serviceNameEmpty: 'سروس کا نام خالی نہیں ہو سکتا۔',
        addAtLeastOneDocument: 'براہ کرم کم از کم ایک دستاویز شامل کریں۔',
        passwordIncorrect: 'پاس ورڈ غلط ہے۔ دوبارہ کوشش کریں۔',
        pleaseSelectServiceToDelete: 'براہ کرم حذف کرنے کے لیے ایک سروس منتخب کریں۔',
        languageSelection: 'زبان منتخب کریں / Select Language / اللغة',
    }
};

// Load services from localStorage or initialize with default data
function loadServices() {
    const storedData = localStorage.getItem('serviceData');
    if (storedData) {
        serviceData = JSON.parse(storedData);
    } else {
        // Default services with all initial entries
        serviceData = {
            "change-status": {
                title: "Change Status",
                documents: ["Visa Only"],
                notes: []
            },
            "medical-examination": {
                title: "Medical Examination and Identification",
                documents: ["Passport Photo", "Visa or Entry Permit Photo"],
                notes: []
            },
            "visa-stamping": {
                title: "VISA Stamping",
                documents: ["Passport Photo", "Personal Photo", "Visa or Entry Permit Photo"],
                notes: []
            },
            "entry-permit-employee": {
                title: "Entry Permit for Employee",
                documents: ["Passport Photo", "Personal Photo", "Work Permit Card Number"],
                notes: ["For Iranian, Pakistani, Afghan, or Iraqi nationals, please request the nationality identification card."]
            },
            "entry-permit-family": {
                title: "Entry Permit for Family",
                documents: [
                    "Sponsor's Documents",
                    "a. Passport Photo",
                    "b. Residency Card",
                    "c. Employment Contract / Salary Certificate",
                    "Wife's Documents",
                    "a. Passport Photo",
                    "b. Personal Photo",
                    "c. Marriage Certificate certified by the UAE Ministry of Foreign Affairs",
                    "Children's Documents",
                    "a. Passport Photo",
                    "b. Personal Photo",
                    "c. Birth Certificate certified by the UAE Ministry of Foreign Affairs"
                ],
                notes: []
            },
            "new-establishment-card": {
                title: "New Establishment Card",
                documents: [
                    "Business License with Barcode",
                    "Establishment Contract",
                    "Identity Card or Passport",
                    "Ejari (Tenancy Contract)"
                ],
                notes: []
            },
            "establishment-card-renewal": {
                title: "Establishment Card Renewal",
                documents: [
                    "Business License with Barcode",
                    "Establishment Contract",
                    "Identity Card or Passport",
                    "Ejari (Tenancy Contract)",
                    "ID"
                ],
                notes: []
            },
            "exit-permit": {
                title: "Exit Permit",
                documents: [
                    "Tourist Visa:",
                    "1. Passport Photo",
                    "2. Visa",
                    "Residence Visa:",
                    "1. Passport Photo",
                    "2. Residency Permit",
                    "Parent's Visit Visa:",
                    "Same documents as for residency visa"
                ],
                notes: ["Visit Al-Aweer for fingerprinting (10-finger scan)."]
            },
            "cancel-family-residency": {
                title: "Cancel Family Residency",
                documents: ["Passport", "IDs and Residency of family members"],
                notes: []
            },
            "employee-visa-cancellation": {
                title: "Employee Visa Cancellation",
                documents: ["Visa", "Sponsor's ID", "Passport", "Personal Photo"],
                notes: [
                    "If inside the country: Cancel Labor Card",
                    "If outside the country: Cancel Immigration"
                ]
            },
            "extend-on-arrival-visa": {
                title: "Extend On-Arrival Visa",
                documents: ["Passport Only"],
                notes: []
            },
            "newborn-visa": {
                title: "Newborn Visa",
                documents: [
                    "Baby's Documents:",
                    "1. Photo",
                    "2. Passport",
                    "3. Birth Certificate (Stamped)",
                    "If Father is the Sponsor:",
                    "1. ID",
                    "2. Visa",
                    "3. Passport",
                    "4. Salary Certificate or Labor Card",
                    "If Mother is the Sponsor:",
                    "Same as father, plus marriage certificate"
                ],
                notes: []
            },
            "visa-renewal": {
                title: "Visa Renewal",
                documents: [
                    "Employee Visa:",
                    "1. Passport",
                    "2. Visa",
                    "Family Visa:",
                    "1. Passport",
                    "2. Visa",
                    "3. Labor Contract / Salary Certificate"
                ],
                notes: ["First medical and ID must be done"]
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
    servicesSelect.innerHTML = `<option value="">-- ${translations[currentLanguage].chooseService} --</option>`;
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
    const notesSection = document.getElementById("notes-section");

    if (selectedService && serviceData[selectedService]) {
        displaySection.style.display = "block";
        displaySection.classList.add('show');
        serviceTitle.textContent = serviceData[selectedService].title;

        // Display documents
        let documentsHTML = '<ul>';
        serviceData[selectedService].documents.forEach((doc, index) => {
            documentsHTML += `
                <li style="animation-delay: ${(index * 0.1)}s">
                    <i class="fas fa-file-alt"></i> ${doc}
                </li>`;
        });
        documentsHTML += '</ul>';
        documentList.innerHTML = documentsHTML;

        // Display notes
        if (serviceData[selectedService].notes.length > 0) {
            notesSection.style.display = "block";
            notesSection.classList.add('show');
            let notesHTML = `<h3>${translations[currentLanguage].notes}</h3><ul>`;
            serviceData[selectedService].notes.forEach((note, index) => {
                notesHTML += `<li style="animation-delay: ${(index * 0.1)}s">${note}</li>`;
            });
            notesHTML += '</ul>';
            notesSection.innerHTML = notesHTML;
        } else {
            notesSection.style.display = "none";
            notesSection.classList.remove('show');
            notesSection.innerHTML = "";
        }
    } else {
        displaySection.style.display = "none";
        displaySection.classList.remove('show');
        documentList.innerHTML = "";
        notesSection.style.display = "none";
        notesSection.classList.remove('show');
        notesSection.innerHTML = "";
    }
}

// Open the service form modal
let formMode = 'add'; // 'add' or 'edit'

function openServiceForm(mode) {
    if (!isAdmin) return;
    formMode = mode;
    const modal = document.getElementById('service-form-modal');
    const formTitle = document.getElementById('form-title');
    const serviceNameInput = document.getElementById('service-name');
    const documentsContainer = document.getElementById('documents-container');
    const notesContainer = document.getElementById('notes-container');
    serviceNameInput.value = '';
    documentsContainer.innerHTML = '';
    notesContainer.innerHTML = '';

    if (mode === 'add') {
        formTitle.textContent = translations[currentLanguage].addService;
        addDocumentField();
        addNoteField();
    } else if (mode === 'edit') {
        const selectedService = document.getElementById("services").value;
        if (!selectedService) {
            alert(translations[currentLanguage].pleaseSelectService);
            return;
        }
        formTitle.textContent = translations[currentLanguage].editService;
        const service = serviceData[selectedService];
        serviceNameInput.value = service.title;
        service.documents.forEach(doc => addDocumentField(doc));
        service.notes.forEach(note => addNoteField(note));
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

// Add a note input field
function addNoteField(value = '') {
    const notesContainer = document.getElementById('notes-container');
    const div = document.createElement('div');
    div.className = 'note-input';
    const input = document.createElement('input');
    input.type = 'text';
    input.value = value;
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'remove-button';
    removeButton.innerHTML = '&times;';
    removeButton.onclick = () => notesContainer.removeChild(div);
    div.appendChild(input);
    div.appendChild(removeButton);
    notesContainer.appendChild(div);
}

// Save the new or edited service
function saveService(event) {
    event.preventDefault();
    const serviceNameInput = document.getElementById('service-name');
    const documentsContainer = document.getElementById('documents-container');
    const notesContainer = document.getElementById('notes-container');
    const documentInputs = documentsContainer.getElementsByTagName('input');
    const noteInputs = notesContainer.getElementsByTagName('input');

    if (serviceNameInput.value.trim() === '') {
        alert(translations[currentLanguage].serviceNameEmpty);
        return;
    }

    if (documentInputs.length === 0) {
        alert(translations[currentLanguage].addAtLeastOneDocument);
        return;
    }

    const documents = [];
    for (let input of documentInputs) {
        if (input.value.trim() !== '') {
            documents.push(input.value.trim());
        }
    }

    if (documents.length === 0) {
        alert(translations[currentLanguage].addAtLeastOneDocument);
        return;
    }

    const notes = [];
    for (let input of noteInputs) {
        if (input.value.trim() !== '') {
            notes.push(input.value.trim());
        }
    }

    const serviceKey = serviceNameInput.value.toLowerCase().replace(/\s+/g, '-');

    if (formMode === 'add') {
        if (serviceData[serviceKey]) {
            alert(translations[currentLanguage].serviceExists);
            return;
        }
    } else if (formMode === 'edit') {
        const selectedService = document.getElementById("services").value;
        delete serviceData[selectedService];
    }

    serviceData[serviceKey] = {
        title: serviceNameInput.value.trim(),
        documents: documents,
        notes: notes
    };

    saveServices();
    populateServiceOptions();
    closeServiceForm();
    document.getElementById('services').value = serviceKey;
    showDocuments();
}

// Delete a service
function deleteService() {
    if (!isAdmin) return;
    const selectedService = document.getElementById("services").value;
    if (!selectedService) {
        alert(translations[currentLanguage].pleaseSelectServiceToDelete);
        return;
    }
    if (confirm(`${translations[currentLanguage].confirmDelete} "${serviceData[selectedService].title}"?`)) {
        delete serviceData[selectedService];
        saveServices();
        populateServiceOptions();
        showDocuments();
        alert(translations[currentLanguage].serviceDeleted);
    }
}

// Language selection
function setLanguage(lang) {
    currentLanguage = lang;
    applyTranslations();
    const languageModal = document.getElementById('language-modal');
    languageModal.style.display = 'none';
}

// Apply translations to the page
function applyTranslations() {
    document.getElementById('header-title').textContent = translations[currentLanguage].headerTitle;
    document.getElementById('header-subtitle').textContent = translations[currentLanguage].headerSubtitle;
    document.getElementById('choose-service-label').textContent = translations[currentLanguage].chooseService;
    document.getElementById('form-title').textContent = formMode === 'add' ? translations[currentLanguage].addService : translations[currentLanguage].editService;
    document.querySelector('#service-form label[for="service-name"]').textContent = translations[currentLanguage].serviceName;
    document.querySelector('#service-form label[for="service-documents"]').textContent = translations[currentLanguage].requiredDocuments;
    document.querySelector('#service-form label[for="service-notes"]').textContent = translations[currentLanguage].notes;
    document.querySelector('#service-form button[type="submit"]').textContent = translations[currentLanguage].saveService;
    document.querySelector('#service-form .form-buttons button[type="button"]').textContent = translations[currentLanguage].cancel;
    document.querySelector('#service-form button[onclick="addDocumentField()"]').textContent = translations[currentLanguage].addDocument;
    document.querySelector('#service-form button[onclick="addNoteField()"]').textContent = translations[currentLanguage].addNote;
    document.querySelector('#admin-password-modal h2').textContent = translations[currentLanguage].adminLogin;
    document.querySelector('#admin-password-form label[for="admin-password"]').textContent = translations[currentLanguage].password;
    document.querySelector('#admin-password-form button[type="submit"]').textContent = translations[currentLanguage].login;
    document.getElementById('admin-button').title = translations[currentLanguage].adminButton;

    // Update service options
    populateServiceOptions();
    showDocuments();
}

// Enter admin mode
function enterAdminMode() {
    const adminPasswordModal = document.getElementById('admin-password-modal');
    adminPasswordModal.style.display = 'block';
}

// Verify admin password
function verifyAdminPassword(event) {
    event.preventDefault();
    const passwordInput = document.getElementById('admin-password');
    if (passwordInput.value === 'Amer247@123') {
        isAdmin = true;
        document.getElementById('admin-actions').style.display = 'block';
        closeAdminPasswordModal();
    } else {
        alert(translations[currentLanguage].passwordIncorrect);
    }
}

// Close admin password modal
function closeAdminPasswordModal() {
    const adminPasswordModal = document.getElementById('admin-password-modal');
    adminPasswordModal.style.display = 'none';
    document.getElementById('admin-password').value = '';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let modal of modals) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

// Initialize the app
loadServices();

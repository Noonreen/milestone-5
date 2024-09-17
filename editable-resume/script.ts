
function saveResumeData() {
    const name = document.getElementById('name')!.innerText;
    const email = document.getElementById('email')!.innerText;
    const education = document.getElementById('education')!.innerText;
    const work = document.getElementById('work')!.innerText;
    const skills = document.getElementById('skills')!.innerText;
  
    const resumeData = { name, email, education, work, skills };
  
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
    alert('Resume changes saved!');
  }
  
  function loadResumeData() {
    const savedData = localStorage.getItem('resumeData');
    if (savedData) {
      const resumeData = JSON.parse(savedData);
      document.getElementById('name')!.innerText = resumeData.name;
      document.getElementById('email')!.innerText = resumeData.email;
      document.getElementById('education')!.innerText = resumeData.education;
      document.getElementById('work')!.innerText = resumeData.work;
      document.getElementById('skills')!.innerText = resumeData.skills;
    }
  }
  
  function generateShareableLink() {
    const userName = document.getElementById('name')!.innerText;
    const uniqueLink = `${window.location.href}?user=${encodeURIComponent(userName)}`;
    const shareLinkElement = document.getElementById('shareLink');
    shareLinkElement!.innerText = `Shareable Link: ${uniqueLink}`;
    shareLinkElement!.style.display = 'block';
  }
  
  function downloadResumeAsPDF() {
    const doc = new jsPDF();
    doc.text("Resume", 10, 10);
    
    const name = document.getElementById('name')!.innerText;
    const email = document.getElementById('email')!.innerText;
    const education = document.getElementById('education')!.innerText;
    const work = document.getElementById('work')!.innerText;
    const skills = document.getElementById('skills')!.innerText;
  
    // Add content to PDF
    doc.text(`Name: ${name}`, 10, 20);
    doc.text(`Email: ${email}`, 10, 30);
    doc.text(`Education: ${education}`, 10, 40);
    doc.text(`Work Experience: ${work}`, 10, 50);
    doc.text(`Skills: ${skills}`, 10, 60);
  
    // Save PDF
    doc.save('resume.pdf');
  }
  
  // Event Listeners
  document.getElementById('saveBtn')?.addEventListener('click', saveResumeData);
  document.getElementById('generateLinkBtn')?.addEventListener('click', generateShareableLink);
  document.getElementById('downloadPdfBtn')?.addEventListener('click', downloadResumeAsPDF);
  
  // Load Data on Page Load
  window.onload = loadResumeData;
  
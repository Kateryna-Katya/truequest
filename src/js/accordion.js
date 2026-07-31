document.querySelectorAll('.faq-acc-el-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const parentElement = trigger.closest('.faq-acc-el');
        const panel = parentElement.querySelector('.faq-acc-el-descr-frame');
        const svg = trigger.querySelector('svg');
        const isOpen = parentElement.classList.contains('open');

        const plusIcon = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.16602 10H15.834M10 4.16602V15.834" stroke="#9D85FF" stroke-width="2" stroke-linecap="round" />
</svg>`;

        const minusIcon = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_19_178)">
    <path d="M4.16675 10H15.8334" stroke="#9D85FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_19_178">
      <rect width="20" height="20" fill="white" />
    </clipPath>
  </defs>
</svg>`;

        if (!isOpen) {
            parentElement.classList.add('open');
            panel.style.maxHeight = panel.scrollHeight + 'px';
            svg.outerHTML = minusIcon;
        } else {
            parentElement.classList.remove('open');
            panel.style.maxHeight = '0';
            svg.outerHTML = plusIcon;
        }
    });
});
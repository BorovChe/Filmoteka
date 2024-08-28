class LoadingSpinner {
  private spinnerElement: HTMLElement | null;

  constructor(containerClass: string) {
    this.spinnerElement = document.createElement('div');
    this.spinnerElement.className = 'loader-container';
    this.spinnerElement.innerHTML = `
      <div class='loader-container'>
         <span class="loader"></span>
      </div> `;
    const container = document.querySelector(containerClass);
    if (container) {
      container.appendChild(this.spinnerElement);
    }
  }

  show(): void {
    if (this.spinnerElement) {
      this.spinnerElement.style.display = 'block';
    }
  }

  hide(): void {
    if (this.spinnerElement) {
      this.spinnerElement.style.display = 'none';
    }
  }
}

export { LoadingSpinner };

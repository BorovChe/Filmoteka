interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function FormatText(transformFn: (text: string) => string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const result = originalMethod.apply(this, args);
      return transformFn(result);
    };
  };
}

class LoadingSpinner {
  private spinnerElement: HTMLElement | null;

  constructor(containerId: string) {
    this.spinnerElement = document.createElement('div');
    this.spinnerElement.className = 'loading-spinner';
    this.spinnerElement.innerHTML = `
        <div class="spinner"></div>
      `;
    const container = document.getElementById(containerId);
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

class ApiService<T> {
  static BASE_URL: string = 'https://jsonplaceholder.typicode.com';
  static TODO_URL: string = '/todos';
  static POST_URL: string = '/posts';
  private value: T[] = [];
  protected loading: boolean = false;
  static spinner: LoadingSpinner;

  constructor(containerId: string) {
    ApiService.spinner = new LoadingSpinner(containerId);
  }

  get responseData(): T[] {
    return this.value;
  }

  async get(url: string): Promise<void> {
    this.loading = true;
    ApiService.spinner.show();
    try {
      const response: Response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data: T[] = await response.json();
      this.value = data;
      this.createList();
    } catch (error) {
      console.error('Oops, something went wrong:', error);
    } finally {
      this.loading = false;
      ApiService.spinner.hide();
    }
  }

  @FormatText(text => text.toUpperCase())
  formatValue(value: string): string {
    return value;
  }

  createItemElement(post: T): HTMLLIElement {
    const listItem = document.createElement('li');

    for (const key in post) {
      if (Object.prototype.hasOwnProperty.call(post, key)) {
        const paragraph = document.createElement('p');
        paragraph.textContent = `${key}: ${this.formatValue(String(post[key as keyof T]))}`;
        listItem.appendChild(paragraph);
      }
    }

    return listItem;
  }

  createList(): void {
    const ul = document.createElement('ul');
    this.value.forEach(item => {
      const li = document.createElement('li');
      li.appendChild(this.createItemElement(item));
      ul.appendChild(li);
    });
    this.appendInContainer(ul);
  }

  appendInContainer(list: HTMLElement): void {
    const container = document.getElementById('container');
    if (container) {
      container.innerHTML = '';
      container.appendChild(list);
    }
  }
}

const apiService = new ApiService<Post>('container');
apiService.get(ApiService.BASE_URL + ApiService.TODO_URL);

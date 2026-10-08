import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  transform(text: string, search: string): string {
    if (!search || !text) return text;
    const regex = new RegExp(`(${search})`, 'gi');
    return text.replace(regex, `<mark>$1</mark>`);
  }
}

@Pipe({
  name: 'filterMenu'
})
export class FilterMenuPipe implements PipeTransform {
  transform(menu: any[], searchTerm: string): any[] {
    if (!menu || !searchTerm) return menu;
    return menu.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
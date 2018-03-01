import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'posts'
})
export class PostsPipe implements PipeTransform {

  transform(items: any[], term): any {
    console.log('term', term);     
    return term ? items.filter(item => item.title.toUpperCase().indexOf(term.toUpperCase()) !== -1): items;
}

}

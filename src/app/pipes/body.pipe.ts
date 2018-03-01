import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'body'
})
export class BodyPipe implements PipeTransform {

  transform(items: any[], term): any {
    console.log('term', term);     
    return term ? items.filter(item => item.body.toUpperCase().indexOf(term.toUpperCase()) !== -1): items;
}

}

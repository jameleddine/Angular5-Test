import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quizPipe',
  pure: true
})
export class QuizPipePipe implements PipeTransform {


  transform(items: any[], term): any {
    console.log('term', term);     
    return term ? items.filter(item => item.name.toUpperCase().indexOf(term.toUpperCase()) !== -1): items;
}


}

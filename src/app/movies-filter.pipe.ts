import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moviesFilter'
})
export class MoviesFilterPipe implements PipeTransform {

  transform(list: any[], filterText: string): unknown {
    return list ? list.filter(item => item.name.search(new RegExp(filterText, 'i')) > -1) : [];
  }

}

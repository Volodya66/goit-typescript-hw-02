/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/


type PublicProps = {

}
class Component<T extends PublicProps> {
  constructor (public props:T) {
}
}

interface PerPAge extends PublicProps{
  title: string;
};

class Page extends Component<PerPAge> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};
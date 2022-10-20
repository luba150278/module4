const links = ["/", "/posts"];
const UA = {
  title: "Привіт",
  menu: [{ title: "Головна", link: links[0] }, { title: "Пости", link: links[1] }],
  footer: "Футер",
  main: {
    title: 'Головна сторінка',
    content: 'Lorem Ipsum є псевдо- латинський текст використовується у веб - дизайні, типографіка, верстка, і друку замість англійської підкреслити елементи дизайну над змістом. Це також називається заповнювач ( або наповнювач) текст. Це зручний інструмент для макетів. Це допомагає намітити візуальні елементи в документ або презентацію, наприклад, друкарня, шрифт, або макет. Lorem Ipsum в основному частиною латинського тексту за класичною автор і філософа Цицерона. Це слова і букви були змінені додаванням або видаленням, так навмисно роблять його зміст безглуздо, це не є справжньою, правильно чи зрозумілою Латинської більше. У той час як Lorem Ipsum все ще нагадує класичну латину, він насправді не має ніякого значення. Як текст Цицерона не містить літери K, W, або Z, чужі латина, ці та інші часто вставляється випадково імітувати типографський Зовнішність європейських мовах, як і орграфов будуть знайдено в оригіналі. У професійному контексті це часто буває, що приватні або корпоративні клієнти Corder публікацію, які будуть зроблені і представлені з фактичний зміст все ще не готовий. Подумайте про прес- блозі, що наповнилися змістом погодинна в день буде жити. Однак рецензенти схильні відволікатися на зрозумілій змісту, скажімо, випадкового тексту, скопійованого з газети або в інтернеті., Швидше за все, зосередитися на тексті, не звертаючи уваги на макет і його елементів. Крім того, випадковий текст ризикує бути ненавмисно гумористичні або образливим, неприйнятним ризиком в корпоративному середовищі. Lorem Ipsum і його численні варіанти були використані з початку 1960 -х років, і цілком імовірно, починаючи з шістнадцятого століття.'
  }

};
const EN = {
  title: "Title",
  menu: [{ title: "Main", link: links[0] }, { title: "Posts", link: links[1] }],
  footer: "Footer",
  main: {
    title: 'Home page',
    content: 'Lorem ipsum dolor sit amet, et maiorum ancillae argumentum eos, ius error efficiendi cu, quo an scaevola laboramus. Cu hinc euismod dignissim nec. Mel rebum malis et, nibh munere dolorum eum id. Ea assum euismod singulis sea, te mel recteque vituperatoribus. Ferri delectus ad mea, eos cu prompta nonumes delicatissimi, ne regione numquam delenit qui. Per natum animal numquam ea, an mucius labitur qui, inani decore efficiantur id sea. Oratio tincidunt dissentias eu pri. Reque mediocritatem no est, his ne recusabo sententiae. Mel essent animal conceptam ad, affert oporteat periculis qui at. Autem constituto adipiscing nam ut, ne qui munere.'
  }
};
export default function content(lang) {
  return lang === "UA" ? UA : EN;
}

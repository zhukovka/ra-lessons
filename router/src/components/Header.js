import React, {Component} from 'react';
function Header({match, data}) {
  let title = 'Добро пожаловать в Журнал «Мурзилка»';
  if (match.params.id) {
    const { author } = data.articles.find(
      ({id}) => id === match.params.id
    );
    const title = `Автор статьи: ${author}`
  }
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export default Header;

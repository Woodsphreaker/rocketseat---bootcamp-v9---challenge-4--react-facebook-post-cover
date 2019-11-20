import React, {Component} from 'react'

import Post from './Post'

export default class PostList extends Component {

  state = {
    post: [
      {
        id: 1,
        author: {
          name: 'Júlio Alcantara ',
          avatar: 'assets/person1.jpg'
        },
        date: new Date(),
        content: 'Pessoal, aguém sabe se a Rocketseat está contratando ?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'assets/person2.jpg'
            },
            content: `A Rocketseat está sempre em busca de novos membros para o time, e geralmente
            ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto
            poa alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts,
            pode me chamar mo Discord! (Sério, me chamem mesmo, esse comentário é real)
            `
          },
        ] 
      },
      {
        id: 2,
        author: {
          name: 'Gabriel Lisboa',
          avatar: 'assets/person5.jpg'
        },
        date: new Date(),
        content: 'Fala galera, beleza ? Estou fazendo o Bootcamp da Rockeseat e está sendo muito massa !',
        comments: [
          {
            id: 1,
            author: {
              name: 'Clara Lisboa',
              avatar: 'assets/person4.jpg'
            },
            content: `Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro 
            módulo sobre Node e já tenho minha API dos desafios construída!`
          },
          {
            id: 2,
            author: {
              name: 'César Toledo',
              avatar: 'assets/person6.jpg'
            },
            content: `Que maaaaaasa! Estou pensado em me escrever para a próxima turma pra ver qual é 
            desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!
            `
          }
        ] 
      },
      {
        id: 2,
        author: {
          name: 'Gabriel Lisboa',
          avatar: 'assets/person5.jpg'
        },
        date: new Date(),
        content: 'Fala galera, beleza ?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Clara Lisboa',
              avatar: 'assets/person4.jpg'
            },
            content: 'Conteúdo do comentário'
          },
          {
            id: 2,
            author: {
              name: 'César Toledo',
              avatar: 'assets/person6.jpg'
            },
            content: 'Conteúdo do comentário'
          }
        ] 
      },
      {
        id: 2,
        author: {
          name: 'Gabriel Lisboa',
          avatar: 'assets/person5.jpg'
        },
        date: new Date(),
        content: 'Fala galera, beleza ?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Clara Lisboa',
              avatar: 'assets/person4.jpg'
            },
            content: 'Conteúdo do comentário'
          },
          {
            id: 2,
            author: {
              name: 'César Toledo',
              avatar: 'assets/person6.jpg'
            },
            content: 'Conteúdo do comentário'
          }
        ] 
      },
    ]
  }

  render() {
      return (
        <>
          <div className="post-list">
            {this.state.post.map((post, i) => <Post key={`post-${i}`} post={ post }/>)}
          </div>
        </>
      )
    }
}
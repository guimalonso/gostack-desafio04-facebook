import React, { Component } from "react";
import Post from "./Post";

import ProfileImg1 from "../assets/profile.png";
import ProfileImg2 from "../assets/profile2.jpg";
import ProfileImg3 from "../assets/profile3.png";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Guilherme Alonso",
          avatar: ProfileImg2
        },
        date: "17 Jul 2019",
        content: "Fiz a timeline do Facebook em React, ficou massa!",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: ProfileImg1
            },
            content: "Que legal Guilherme, posta aí o link pra gente ver!"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Diego Fernandes",
          avatar: ProfileImg1
        },
        date: "16 Jul 2019",
        content:
          "Galera, tá no ar o novo desafio em React! Dessa vez vocês vão desenvolver um clone básico e bem massa da timeline do Facebook. Bora codar!",
        comments: [
          {
            id: 1,
            author: {
              name: "Guilherme",
              avatar: ProfileImg2
            },
            content: "Show, já vou começar a fazer aqui!"
          },
          {
            id: 2,
            author: {
              name: "João Alcântara",
              avatar: ProfileImg3
            },
            content:
              "Acabei de terminar o módulo de React e estava esperando ansiosamente por esse desafio. Vou começar a fazer também, valeu, Diego!"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <section className="post-list">
        {this.state.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </section>
    );
  }
}

export default PostList;

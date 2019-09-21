import React from "react";
import PropTypes from "prop-types";

function Potato({ fav }) {
  //Food라는 Component를 생성
  return <h1> That's What I Like {fav} </h1>; //{fav}는 props.fav와 같은 뜻으로 js6에서 추가된 개념같음
  // 여기서 {fav}란 prop은 맨 아래 Potato라는 Component에 넣어진 모든 것
}

function Food({ name, picture, rating }) {
  //name은
  // Food라는 이름의 컴포넌트를 생성
  return (
    <div>
      <h1> i like {name} </h1>
      <h2> {rating} / 5</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  // 타입 확인하는 법
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const foodIlike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.branddb.co.kr%2Fdata%2Ffiles%2Fdc92a11195b367aabfc5cbb1062d3333.png&f=1&nofb=1",
    rating: 4
  },
  {
    id: 2,
    name: "Bibimbap",
    image:
      "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.lovepik.com%2Felement%2F40095%2F7000.png_860.png&f=1&nofb=1",
    rating: 4.3
  },
  {
    id: 3,
    name: "kimbap",
    image:
      "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.urbanbrush.net%2Fweb%2Fwp-content%2Fuploads%2Fedd%2F2017%2F10%2F%25EC%258A%25A4%25ED%2581%25AC%25EB%25A6%25B0%25EC%2583%25B7-2017-10-19-%25EC%2598%25A4%25EC%25A0%2584-12.28.00.png&f=1&nofb=1",
    rating: 5
  }
];

function App() {
  return (
    // App이라는 Component를 반환해준다.
    <div>
      {foodIlike.map(function(eat) {
        // foodIlike이라는 배열에 map함수를 사용하여 기존의 배열은 그대로 두고 서브 배열을 만듦.
        return (
          <Food
            key={eat.id}
            name={eat.name}
            picture={eat.image}
            rating={eat.rating}
          />
        ); // Food 컴포넌트에 name과 picture이라는 props를 생성하여 argument로 전송

        // map 함수는 기존 배열의 처음 인덱스부터 마지막 인덱스까지 순회하며 "현재 인덱스"의 아이템(value)의 데이터를 가공할 수 있고
        // return을 하면 가공된 데이터를 새로운 리스트(서브)의 인덱스에 담게 된다.
        // 즉 map() 함수를 사용하여 만들어진 새로운 리스트의 length는 기존 배열의 length와 같고, 내부 아이템만 다르게 된다.

        // let mainArray=[1,2,3,4,5]
        // let subArray = mainArray.map(function(value, index){
        //  return value + 5; }); 와 같이 함수를 사용했을 경우 ubArray는 [6,7,8,9,10] 이 되는 것

        // 화살표 함수를 사용한 경우 {foodIlike.map(eat => ())};
        //                         <Food name={eat.name} picture={eat.image} /> ))}
      })}
      <Potato fav={["pizza", 1, 2, 3, 4, 5]} />
      <Potato fav={["ramen", 1, 2, 3, 4, 5]} />
    </div>
  );
}

export default App;

// quotes.js

const quotsOfTheDay = [
  // Wayne Dyer
  {
    img: "/images/wayne-dyer.jpg",
    author: "Wayne Dyer",
    quote: "“You'll see it when you believe it.”",
  },
  {
    img: "/images/wayne-dyer.jpg",
    author: "Wayne Dyer",
    quote:
      "“When you judge another, you do not define them, you define yourself.”",
  },
  {
    img: "/images/wayne-dyer.jpg",
    author: "Wayne Dyer",
    quote:
      "“When you dance, your purpose is not to get to a certain place on the floor. It's to enjoy each step along the way.”",
  },
  {
    img: "/images/wayne-dyer.jpg",
    author: "Wayne Dyer",
    quote:
      "“The more you extend kindness to yourself, the more it will become your automatic response to others.”",
  },
  {
    img: "/images/wayne-dyer.jpg",
    author: "Wayne Dyer",
    quote: "“Go for it now. The future is promised to no one.”",
  },
  {
    img: "/images/wayne-dyer.jpg",
    author: "Wayne Dyer",
    quote: "“How people treat you is their karma; how you react is yours.”",
  },
  {
    img: "/images/wayne-dyer.jpg",
    author: "Wayne Dyer",
    quote:
      "“You cannot always control what goes on outside. But you can always control what goes on inside.”",
  },
  {
    img: "/images/wayne-dyer.jpg",
    author: "Wayne Dyer",
    quote:
      "“Peace is the result of retraining your mind to process life as it is, rather than as you think it should be.”",
  },
  {
    img: "/images/wayne-dyer.jpg",
    author: "Wayne Dyer",
    quote:
      "“There's no scarcity of opportunity to make a living at what you love. There is only a scarcity of resolve to make it happen.”",
  },
  {
    img: "/images/wayne-dyer.jpg",
    author: "Wayne Dyer",
    quote:
      "“If you change the way you look at things, the things you look at change.”",
  },
  {
    img: "/images/wayne-dyer.jpg",
    author: "Wayne Dyer",
    quote: "“You are not stuck where you are unless you decide to be.”",
  },
  {
    img: "/images/wayne-dyer.jpg",
    author: "Wayne Dyer",
    quote:
      "“I am thankful to all those who said no. It's because of them, I did it myself.”",
  },
  {
    img: "/images/wayne-dyer.jpg",
    author: "Wayne Dyer",
    quote:
      "“Doing what you love is the cornerstone of having abundance in your life.”",
  },
  {
    img: "/images/wayne-dyer.jpg",
    author: "Wayne Dyer",
    quote:
      "“You don't need to be better than anyone else, you just need to be better than you used to be.”",
  },
  {
    img: "/images/wayne-dyer.jpg",
    author: "Wayne Dyer",
    quote: "“I would rather be hated for who I am than loved for who I'm not.”",
  },
  {
    img: "/images/wayne-dyer.jpg",
    author: "Wayne Dyer",
    quote: "“Conflict cannot survive without your participation.”",
  },
  {
    img: "/images/wayne-dyer.jpg",
    author: "Wayne Dyer",
    quote:
      "“The highest form of ignorance is when you reject something you don't know anything about.”",
  },
  {
    img: "/images/wayne-dyer.jpg",
    author: "Wayne Dyer",
    quote:
      "“It's easy to be a critic, but being a doer requires effort, risk, and change.”",
  },
  {
    img: "/images/wayne-dyer.jpg",
    author: "Wayne Dyer",
    quote:
      "“Judgments prevent us from seeing the good that lies beyond appearances.”",
  },
  // John Eliot
  {
    img: "/images/john-eliot.jpg",
    author: "John Eliot",
    quote:
      "“Confidence is not a guarantee of success, but a pattern of thinking that will improve your likelihood of success, a tenacious search for ways to make things work.”",
  },
  {
    img: "/images/john-eliot.jpg",
    author: "John Eliot",
    quote:
      "“Thinking is a habit, and like any other habit, it can be changed; it just takes effort and repetition.”",
  },
  {
    img: "/images/john-eliot.jpg",
    author: "John Eliot",
    quote:
      "“Superstars think like superstars long before the fans or the press anoint them.”",
  },
  {
    img: "/images/john-eliot.jpg",
    author: "John Eliot",
    quote: "“Realistic people do not accomplish extraordinary things.”",
  },
  {
    img: "/images/john-eliot.jpg",
    author: "John Eliot",
    quote: "“We must not sit down and wait for miracles. Up and be going!”",
  },
  {
    img: "/images/john-eliot.jpg",
    author: "John Eliot",
    quote: "“Perfectionism is simply putting a limit on your future.”",
  },
  {
    img: "/images/john-eliot.jpg",
    author: "John Eliot",
    quote: "“You will not do incredible things without an incredible dream.”",
  },
  {
    img: "/images/john-eliot.jpg",
    author: "John Eliot",
    quote:
      "“Exceptional thinkers ignore their critics and go about their business making history.”",
  },
  {
    img: "/images/john-eliot.jpg",
    author: "John Eliot",
    quote: "",
  },
  // Dan Brown
  {
    img: "/images/dan-brown.jpg",
    author: "Dan Brown",
    quote:
      "“Nothing is more creative...nor destructive...than a brilliant mind with a purpose.”",
  },
  {
    img: "/images/dan-brown.jpg",
    author: "Dan Brown",
    quote: "“Everything is possible. The impossible just takes longer.”",
  },
  {
    img: "/images/dan-brown.jpg",
    author: "Dan Brown",
    quote: "“Life is filled with secrets. You can't learn them all at once.”",
  },
  {
    img: "/images/dan-brown.jpg",
    author: "Dan Brown",
    quote: "“Great minds are always feared by lesser minds.”",
  },
  {
    img: "/images/dan-brown.jpg",
    author: "Dan Brown",
    quote: "“The decisions of our past are the architects of our present.”",
  },
  {
    img: "/images/dan-brown.jpg",
    author: "Dan Brown",
    quote:
      "“The power of human thought grows exponentially with the number of minds that share that thought.”",
  },
  {
    img: "/images/dan-brown.jpg",
    author: "Dan Brown",
    quote:
      "“Sometimes a change of perspective is all it takes to see the light.”",
  },
  // Grace Coddington
  {
    img: "/images/grace-coddington.jpg",
    author: "Grace Coddington",
    quote:
      "“Always keep your eyes open. Keep watching. Because whatever you see can inspire you.”",
  },
  // Mae West
  {
    img: "/images/mae-west.jpg",
    author: "Mae West",
    quote: "“It is better to be looked over than overlooked.”",
  },
  {
    img: "/images/mae-west.jpg",
    author: "Mae West",
    quote: "“You are never too old to become younger.”",
  },
  {
    img: "/images/mae-west.jpg",
    author: "Mae West",
    quote: "“I never said it would be easy, I only said it would be worth it.”",
  },
  // Celestine Chua
  {
    img: "/images/celestine-chua.jpg",
    author: "Celestine Chua",
    quote:
      "“If what you're doing is not your passion, you have nothing to lose.”",
  },
  {
    img: "/images/celestine-chua.jpg",
    author: "Celestine Chua",
    quote: "“The only limits in your life are those that you set yourself.”",
  },
  {
    img: "/images/celestine-chua.jpg",
    author: "Celestine Chua",
    quote:
      "“Happiness is an effect of doing what you love, not an end goal to be achieved.”",
  },
  {
    img: "/images/celestine-chua.jpg",
    author: "Celestine Chua",
    quote:
      "“Rather than waste time and energy worrying, use that time and energy to constructively deal with whatever is causing the worry.”",
  },
  {
    img: "/images/celestine-chua.jpg",
    author: "Celestine Chua",
    quote:
      "“Problems remain as problems because people are busy defending them rather than finding solutions.”",
  },
  {
    img: "/images/celestine-chua.jpg",
    author: "Celestine Chua",
    quote:
      "“You become stronger with every problem you face and every obstacle you overcome.”",
  },
  {
    img: "/images/celestine-chua.jpg",
    author: "Celestine Chua",
    quote:
      "“You become stronger with every problem you face and every obstacle you overcome.”",
  },
  {
    img: "/images/celestine-chua.jpg",
    author: "Celestine Chua",
    quote:
      "“To create more positive results in your life, replace 'if only' with 'next time'.”",
  },
  {
    img: "/images/celestine-chua.jpg",
    author: "Celestine Chua",
    quote:
      "“For every effect there is a root cause. Find and address the root cause rather than try to fix the effect, as there is no end to the latter.”",
  },
  {
    img: "/images/celestine-chua.jpg",
    author: "Celestine Chua",
    quote:
      "“Life is a gift. Never forget to enjoy and bask in every moment you are in.”",
  },
  {
    img: "/images/celestine-chua.jpg",
    author: "Celestine Chua",
    quote:
      "“Fear, uncertainty, and discomfort are your compasses toward growth.”",
  },
  {
    img: "/images/celestine-chua.jpg",
    author: "Celestine Chua",
    quote:
      "“Would you rather learn to deal with the truth now than be forced to do so later on?”",
  },
  {
    img: "/images/celestine-chua.jpg",
    author: "Celestine Chua",
    quote:
      "“Many answers to what you seek don't lie 'out there'. If you look inwards, you'll find the answer has been in you all along.”",
  },
  {
    img: "/images/celestine-chua.jpg",
    author: "Celestine Chua",
    quote:
      "“If you find you are not valued and appreciated, then shift your attention to places where you will be valued and appreciated.”",
  },
  {
    img: "/images/celestine-chua.jpg",
    author: "Celestine Chua",
    quote: "“By changing nothing, nothing changes.”",
  },
  {
    img: "/images/celestine-chua.jpg",
    author: "Celestine Chua",
    quote:
      "“Never waste a minute of your precious life thinking about people you don't like.”",
  },
  {
    img: "/images/celestine-chua.jpg",
    author: "Celestine Chua",
    quote:
      "“Problems remain as problems because people are busy defending them rather than finding solutions.”",
  },
  {
    img: "/images/celestine-chua.jpg",
    author: "Celestine Chua",
    quote:
      "“To raise your consciousness, surround yourself with people of higher consciousness.”",
  },
  {
    img: "/images/celestine-chua.jpg",
    author: "Celestine Chua",
    quote:
      "“If you believe you can, you can. If you believe you can't, then, well you can't.”",
  },
  {
    img: "/images/celestine-chua.jpg",
    author: "Celestine Chua",
    quote:
      "“If you believe you can, you can. If you believe you can't, then, well you can't.”",
  },
  {
    img: "/images/celestine-chua.jpg",
    author: "Celestine Chua",
    quote:
      "“Life is about choice. You can choose to be a victim or anything else you like to be.”",
  },
  {
    img: "/images/celestine-chua.jpg",
    author: "Celestine Chua",
    quote:
      "“Life is about choice. You can choose to be a victim or anything else you like to be.”",
  },
  {
    img: "/images/celestine-chua.jpg",
    author: "Celestine Chua",
    quote:
      "“Life is about choice. You can choose to be a victim or anything else you like to be.”",
  },
  {
    img: "/images/celestine-chua.jpg",
    author: "Celestine Chua",
    quote:
      "“Life is about choice. You can choose to be a victim or anything else you like to be.”",
  },
  {
    img: "/images/celestine-chua.jpg",
    author: "Celestine Chua",
    quote: "“There's no next time. It's now or never.”",
  },
  {
    img: "/images/celestine-chua.jpg",
    author: "Celestine Chua",
    quote: "“In order to be walked over, you have to be lying down.”",
  },
  {
    img: "/images/celestine-chua.jpg",
    author: "Celestine Chua",
    quote: "“In order to be walked over, you have to be lying down.”",
  },
  {
    img: "/images/celestine-chua.jpg",
    author: "Celestine Chua",
    quote:
      "“Instead of thinking about what you are going to do when you retire, think about how you can do that now and make a living from it.”",
  },
  {
    img: "/images/celestine-chua.jpg",
    author: "Celestine Chua",
    quote:
      "“Everyone faces challenges in life. It's a matter of how you learn to overcome them and using them to your advantage.”",
  },
  {
    img: "/images/celestine-chua.jpg",
    author: "Celestine Chua",
    quote:
      "“The degree of responsibility you take for your life determines how much change you can create in it.”",
  },
  {
    img: "/images/celestine-chua.jpg",
    author: "Celestine Chua",
    quote:
      "“Every moment you get is a gift. Spend it on things that matter. Don't spend it by dwelling on unhappy things.”",
  },
  // Sonia Ricotti
  {
    img: "/images/sonia-ricotti.jpg",
    author: "Sonia Ricotti",
    quote:
      "“We can choose to look at whatever we want. We can look at what's wrong in our life or we can look at what's right.”",
  },
  {
    img: "/images/sonia-ricotti.jpg",
    author: "Sonia Ricotti",
    quote: "“Opportunity comes when you continually push forward.”",
  },
  {
    img: "/images/sonia-ricotti.jpg",
    author: "Sonia Ricotti",
    quote:
      "“Surrender to what is. Let go of what was. Have faith in what will be.”",
  },
  {
    img: "/images/sonia-ricotti.jpg",
    author: "Sonia Ricotti",
    quote:
      "“The past is history. It no longer exists, but you are keeping it alive in your mind through your thoughts. Let it go. It is not serving you.”",
  },
  {
    img: "/images/sonia-ricotti.jpg",
    author: "Sonia Ricotti",
    quote:
      "“The past is history. It no longer exists, but you are keeping it alive in your mind through your thoughts. Let it go. It is not serving you.”",
  },
  {
    img: "/images/sonia-ricotti.jpg",
    author: "Sonia Ricotti",
    quote:
      "“Just trust that everything is unfolding the way it is supposed to. Don't resist... Great things are waiting for you around the corner.”",
  },
  {
    img: "/images/sonia-ricotti.jpg",
    author: "Sonia Ricotti",
    quote:
      "“When you say yes to change, you are choosing to navigate that path peacefully and happily and see where it takes you.”",
  },
];

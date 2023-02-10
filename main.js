// <!--------------------------------->
//*    Title of the page
// <!--------------------------------->
document.title = "Learn to Code - Grasshopper";

const body = document.body;
const style = document.createElement('style');
let concept_slider_length = 1500;
style.innerHTML = `
        body{
            margin:0;
            padding:0;
            color:#002c43;
        }
        .navbar{
            display:flex;
            justify-content:space-between;
            padding:0 .5em;
        }
        .navbar li{
            list-style:none;
            font-size:1rem;
            font-weight:600;
            color:#99ADB7;
            cursor:pointer;
            transition :all 250ms ease-in;
        }

        .logo{
            width:100%;
            height:30px;
            margin-right:2em;
        }

        .navbar li:hover{
            color:#002c43;
        }

        .navbar div{
            display:flex;
            gap:1em;
            align-items:center;
        }

        /*hero-section*/
        #hero{
            position:relative;
            width:100%;
            height:600px;
        }

        .hero-container{
            margin-top:3.5em;
            max-width:1000px;
            margin-left:3.5em;
        }

        .hero-container > h1{
            font-size:2rem;
            letter-spacing:1px;
            width:421px;
        }

        .hero-container div {
            font-size:1.2rem;
            display:flex;
            gap:10px;
            margin-bottom:1em;
        }

        .hero-text-container{
            display:flex;
            flex-direction:column;
            height:20px;
            overflow-y:hidden;
            color:#45c14e;
            position:relative;
        }

        .hero-text-container::before,.hero-text-container::after{
            content:'';
            position:absolute;
            left:0;
            right:0;
            height:5px;
            background-image: linear-gradient(-180deg, #FCFCFC 0%, rgba(252,252,252,0) 100%);
            z-index:2;
        }
        
        .hero-text-container::before{
            top:0;
        }

        .hero-text-container::after{
            bottom:-7px;
        }
        .hero-text-container > span{
            transition:all 600ms;
            animation:scrolling-effect 8s 1s infinite ease-in;
        }

        @keyframes scrolling-effect{
            0%{
                transform:translateY(0%);
            }
            25%{
                transform: translateY(-100%);
            }
            50%{
                transform:translateY(-200%);
            }
            75%{
                transform:translateY(-300%);
            }
            100%{
                transform:translateY(-400%);
            }
        }

        .hero-container >button{
            color:#fcfcfc;
            font-weight:600;
            font-size:1rem;
            border-radius:24px;
            border:none;
            background-color:#45c14e;
            padding:.8em 1.8em;
            cursor:pointer;
        }
        .hero-background{
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
        }
        .hero-background-main,
        .hero-background-tree-dark,
        .hero-background-skinny-tree,
        .hero-background-laptop,
        .hero-background-phone,
        .hero-background-grasshopper,
        .hero-background-bush-dark,
        .hero-background-bush-light{
            position:absolute;
            background-repeat:no-repeat;
        }

        .hero-background-main{
            position:absolute;
            top:0;
            left:0;
            right:0;
            bottom:-50px;
            background-image:url('/images/hero__background-hills.svg');
            background-position:center center;
            background-size:contain;
            background-repeat:no-repeat;
            z-index:-100;
        }

        .hero-background-tree-dark{
            background-image:url('/images/hero__tree-dark.svg');
            top:36%;
            left:0;
            width:200px;
            height:200px;
            background-size:contain;
        }

        .hero-background-skinny-tree{
            background-image:url('/images/hero__tree-skinny.svg');
            top:36%;
            left:120px;
            width:200px;
            height:200px;
            background-size:contain;
        }
        
        .hero-background-laptop{
            background-image:url('/images/hero__macbook.png');
            top:23%;
            left:36%;
            width:260px;
            height:200px;
            background-size:contain;
        }

        .hero-background-phone{
            background-image:url('/images/hero__pixel.png');
            top:5%;
            left:60%;
            width:260px;
            height:325px;
            background-size:contain;
            z-index:10;
        }

        .hero-background-grasshopper{
            background-image:url('/images/hero__grasshopper.svg');
            top:5%;
            right:5%;
            width:350px;
            height:400px;
            background-size:contain;
            z-index:-10;
        }        

        .hero-background-bush-dark{
            background-image:url('/images/hero__bush-dark.svg');
            top:50%;
            left:44%;
            width:180px;
            height:180px;
            background-size:contain;
            z-index:100;
        }
        .hero-background-bush-light{
            background-image:url('/images/hero__bush-light.svg');
            top:45%;
            left:38%;
            width:250px;
            height:200px;
            background-size:contain;
            
        }
        
        /*touch section */
        .touch{
            background:#DFF8EB;
            margin-top:-14%;
            text-align:center;
            padding-bottom:3em;
        }

        .touch h1{
            font-size:2rem;
            margin-bottom:2em;
        }

        .touch-main{
            display:flex;
            justify-content:center;
            align-items:center;
        }

        .touch-main-box p{
            font-size:1.2rem;
            width:30ch;
        }

        .touch-main-box img{
            width:150px;
            height:150px;
        }

        /* Stories Slider */
        #stories{
            margin-top:5em;
            margin-bottom:3em;
        }
        #stories h2{
            text-align:center;
        }

        .stories-slider{
            padding:2em 0;
            overflow-x:hidden;
            max-width:100%;
            box-sizing:border-box;
        }

        .slider-list{
            display: flex;
            width: 20000px;
            gap: 2em;
        }

        .stories-item{
            background-color:#F8F8F8;
            box-sizing: border-box;
            width: 450px;
            height: 225px;
            display: flex;
            justify-content:center;
            border-radius:10px;
            padding: 30px;
            gap: 2em;
            box-shadow: 0 4px 8px 0 rgb(0 0 0 / 15%);
            opacity:0.2;
            transform:scale(.9);
        }
        
        .stories-item-center{
            opacity:1;
            transform:scale(1);
        }

        .stories-item-image img{
            width:100%;
            max-height:70px;
            object-fit:cover;
        }

        .stories-item-detail{
            width:70%;
        }

        .stories-item-detail::before{
            content:'';
            background:url('/images/quotes.svg');
            background-position:center center;
            background-size:contain;
            background-repeat:no-repeat;
            display:block;
            width:18px;
            height:18px;
        }
        .stories-item-detail p,.stories-item-detail strong{
            font-size:1.1rem
        }
        .pagination-list-container{
            display:flex;
            justify-content:center;
            gap:.5em;
            padding:0px;
        }
        .pagination-list{
            background-color: #99ADB7;
            height:10px;
            width:10px;
            border-radius:50%;
            list-style:none;
            cursor:pointer;
        }

        .active-pagination-dot{
            background-color:#00324B;
        }

        /*Learn to code section*/
        #lear-to-code{
            display:flex;
            justify-content:space-around;
            align-items:center;
            text-align:center;
            padding:2em 3em;
            gap:1em;
            background-color:#4ee8e2;
            margin-bottom:2em;
        }
        .left-grasshopper-image img{
            width:100px;
        }

        .right-devices-image img{
            width:150px;
        }

        /*features section*/
        #features-section{
            padding:2em 5em;
            position:relative;
            margin-bottom:3em;
            height:400px;
            overflow:hidden;
        }
        .features-main-content{
            display:flex;
            max-width:1200px;
            margin:0 auto;
            align-items:center;
            gap:5em;
        }

        .features-left-content{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        
        .features-left-content-boxes{
            display:flex;
            flex-direction:column;
            justify-content:flex-start;
            align-items:flex-start;
            position:relative;
        }
        .left-content-box{
            transition:all 1000ms ease-in;
        }
        .left-content-box,.right-content-box{
            position:absolute;
            top:0;
            left:0;
            opacity:0;
        }
        
        .show{
            opacity:1;
        }
        
        .features-left-content-boxes img{
            width:40px;
        }

        .features-left-content-boxes p{
            font-size:1.5rem;
            width:25ch;
            font-weight:bold;
        }

        .features-right-content{
            position:absolute;
            top:0%;
            right:0%;
            width:300px;
            height:200px;
        }

        .feature-right-content-laptop{
            top:12%;
            right:-20%;
            width:600px;
        }


        .features-right-content img{
            max-width:100%;
            object-fit:contain;
        }

        .feature-pagination{
            position: absolute;
            top: 40%;
        }

        /*programming concept*/
        #concept{
            overflow:hidden;
            margin-bottom:3em;
        }
        .concept-header{
            text-align:center;
            margin-bottom:2em;
        }

        .concept-slide-row{
            display:flex;
            gap:.5em;
            height:40px;
            align-items:center;
            justify-content:center;
            margin-bottom:12px;
            margin-left:120px;
            animation:auto-slide-left 90s alternate infinite;
        }

        .concept-slider-row-2{
            transform:translate(-${concept_slider_length}px);
            animation:auto-slide-right 90s alternate infinite;
        }

        @keyframes auto-slide-left{
            0%{
                transform:translate(0)
            }
            100%{
                transform:translate(-${concept_slider_length}px)
            }
        }

        @keyframes auto-slide-right{
            0%{
                transform:translate(0)
            }
            100%{
                transform:translate(${concept_slider_length}px)
            }
        }

        .concept-slide-row > p{
            display:inline-flex;
            flex:0 0 auto;
            padding:.8em 2em;
            border-radius:30px;
            background:#DFF8EC;
            font-weight:600;
        }

        /* app link section */
        #app-link{
            background-color:#4ee8e2;
            padding-top:100px;
            padding-inline:100px;
            position:relative;
            overflow:hidden;
            height:calc(100vh/2);
            z-index:-11;
        }

        .app-link-content{
            max-width:1200px;
            margin:0 auto;
        }

        .app-link-content h2{
            font-size:2rem;
            width:30ch;
        }

        .app-links{
            display:flex;
            align-items:center;
            gap:2em;
        }

        .app-links button{
            outline-color: transparent;
            padding:.8em 1.8em;
            background-color:#45c14e;
            border:none;
            border-radius:24px;
            font-size:1.2rem;
            font-weight:600;
            color:#f0f0f0
        }

        .app-links img{
            width:180px;
        }

        .app-link-grasshopper-mother{
            background-image: url(/images/section--get-started__grasshopper-mama.svg);
            background-position: top;
            background-size:100%;
            background-repeat: no-repeat;
            width: 200px;
            height: 550px;
            position: absolute;
            top: 30%;
            right: 100px;
        }
        
        .app-link-cloud-1{
            position:relative;
            right:10%;
            bottom:150px;
            width:200px;
            z-index:-1;
            animation:cloud-float-right 90s alternate infinite;
        }

        .app-link-cloud-2{
            left:80%;
            position:relative;
            z-index:-1;
            animation:cloud-float-left 90s alternate infinite;
        }


        @keyframes cloud-float-left{
            0%{
                transform:translate(0);
            }
            100%{
                transform:translate(-${innerWidth}px);
            }
        }

        @keyframes cloud-float-right{
            0%{
                transform:translate(0);
            }
            100%{
                transform:translate(${innerWidth}px);
            }
        }

        /*footer section*/

        #footer{
            background-color:#00324B;
            color:#f0f0f0;
            padding:40px;
        }

        .footer-link-container{
            display:flex;
            justify-content:space-evenly;
            align-items:flex-start;
            gap:3em;
        }

        .footer-links a{
            font-size:1.1rem;
            margin-bottom:1em;
            display:block;
        }

        .footer-text{
            margin-top:1.5em;
            text-align:center;
        }

        .footer-text img{
            max-width:100%;
            height:auto;
        }

        
`
document.head.appendChild(style);
function createElement(element) {
    return document.createElement(element);
}
const hero_sub_heading = [
    "opens new doors",
    "creates new hobbies",
    "launches new careers",
    "develops new skills",
    "expands your network",
]
// <!--------------------------------->
//*    Navbar section
// <!--------------------------------->
const navbar_section = createElement('section');
const navbar_list = createElement('ul');
navbar_list.classList.add('navbar');
navbar_section.appendChild(navbar_list);

const left_div = createElement('div');
const right_div = createElement('div');
navbar_list.append(left_div, right_div);

const left_list_1 = createElement('li');
//logo of the grasshopper
const logo = createElement('img');
logo.classList.add('logo');
logo.src = "/images/logo.blue.svg";
left_list_1.append(logo);

const left_list_2 = createElement('li');
left_list_2.textContent = 'What is Coding';
const left_list_3 = createElement('li')
left_list_3.textContent = 'Curriculum';
const left_list_4 = createElement('li')
left_list_4.textContent = 'Glossary';
const left_list_5 = createElement('li')
left_list_5.textContent = 'About Us';
const left_list_6 = createElement('li')
left_list_6.textContent = 'FAQ';


left_div.append(left_list_1, left_list_2, left_list_3, left_list_4, left_list_5, left_list_6)

const right_list = createElement('li');
right_list.textContent = "Sign In";
right_div.append(right_list);
body.append(navbar_section);

// <!--------------------------------->
//*    Hero section
// <!--------------------------------->
const hero_section = createElement('section');
const hero_div_container = createElement('div');
const hero_div_background = createElement('div');

hero_section.setAttribute('id', 'hero');
hero_div_container.classList.add('hero-container');
hero_div_background.classList.add('hero-background');

hero_section.append(hero_div_container, hero_div_background);
// hero_section/hero_container
const hero_header_content = createElement('h1');
hero_header_content.textContent = "Welcome to Grasshopper,the coding app for beginners";

const hero_sub_heading_text = createElement('div');
// hero_sub_heading_text.classList.add('')
hero_sub_heading_text.textContent = "Learning to code ";
const hero_sub_heading_texts_container = createElement('span');
hero_sub_heading_texts_container.classList.add('hero-text-container');
let arr = [];
for (let i = 0; i < 5; i++) {
    arr[i] = createElement('span');
    arr[i].textContent = hero_sub_heading[i % 4];
    hero_sub_heading_texts_container.append(arr[i]);
}

hero_sub_heading_text.appendChild(hero_sub_heading_texts_container);

const hero_btn = createElement('button');
hero_btn.textContent = "Start Coding Today";

hero_div_container.append(hero_header_content, hero_sub_heading_text, hero_btn);

//hero-section/hero-background-div
const hero_div_background_main = createElement('div');
hero_div_background_main.classList.add('hero-background-main');

const hero_div_background_tree_dark = createElement('div');
hero_div_background_tree_dark.classList.add('hero-background-tree-dark');

const hero_div_background_skinny_tree = createElement('div');
hero_div_background_skinny_tree.classList.add('hero-background-skinny-tree');

const hero_div_background_laptop = createElement('div');
hero_div_background_laptop.classList.add('hero-background-laptop');

const hero_div_background_phone = createElement('div');
hero_div_background_phone.classList.add('hero-background-phone');

const hero_div_background_grasshopper = createElement('div');
hero_div_background_grasshopper.classList.add('hero-background-grasshopper');

const hero_div_background_bush_dark = createElement('div');
hero_div_background_bush_dark.classList.add('hero-background-bush-dark');

const hero_div_background_bush_light = createElement('div');
hero_div_background_bush_light.classList.add('hero-background-bush-light');

hero_div_background.append(hero_div_background_main,
    hero_div_background_tree_dark,
    hero_div_background_skinny_tree,
    hero_div_background_laptop,
    hero_div_background_phone,
    hero_div_background_grasshopper,
    hero_div_background_bush_dark,
    hero_div_background_bush_light);
body.append(hero_section);

// <!--------------------------------->
//*    Touch section
// <!--------------------------------->
const touch_section = createElement('section');
const touch_section_header = createElement('h1');
touch_section_header.textContent = "The best way to start your coding adventure";
const touch_main_div = createElement('div');
const touch_div_1 = createElement('div');
const touch_div_2 = createElement('div');
const touch_div_3 = createElement('div');
//images
const div_1_img = createElement('img');
div_1_img.src = "/images/adventure__waving.svg";
const div_2_img = createElement('img');
div_2_img.src = '/images/adventure__coding.svg';
const div_3_img = createElement('img');
div_3_img.src = '/images/adventure__journey.svg';

//details
const div_1_para = createElement('p');
div_1_para.textContent = "Learn with fun, quick lessons on your phone that teach you to write real JavaScript.";
const div_2_para = createElement('p');
div_2_para.textContent = "Move through progressively challenging levels as you develop your abilities.";
const div_3_para = createElement('p');
div_3_para.textContent = "Graduate with fundamental programming skills for your next step as a coder.";


touch_main_div.classList.add('touch-main');
touch_section.classList.add('touch');
touch_div_1.classList.add('touch-main-box');
touch_div_2.classList.add('touch-main-box');
touch_div_3.classList.add('touch-main-box');

touch_div_1.append(div_1_img, div_1_para);
touch_div_2.append(div_2_img, div_2_para);
touch_div_3.append(div_3_img, div_3_para);

touch_main_div.append(touch_div_1, touch_div_2, touch_div_3);
touch_section.append(touch_section_header, touch_main_div);
body.append(touch_section);


// <!--------------------------------->
//*    Stories section
// <!--------------------------------->
const stories_section = createElement('section');
const stories_main_div = createElement('div');
const stories_heading = createElement('h2');
const stories_slider = createElement('div');
const stories_pagination = createElement('nav');

stories_section.setAttribute('id', 'stories');
stories_main_div.classList.add('stories-main');
stories_slider.classList.add('stories-slider');
stories_pagination.classList.add('stories-pagination');

//stories_main/heading
stories_heading.textContent = "Grasshopper stories";
//stories_main/slider
const slider_list = createElement('div');
const stories_item_4_clone = createElement('div');
const stories_item_1 = createElement('div');
const stories_item_2 = createElement('div');
const stories_item_3 = createElement('div');
const stories_item_4 = createElement('div');
const stories_item_1_clone = createElement('div');
const stories_item_2_clone = createElement('div');


//item 1
const item_1_image = createElement('div');
const user_image_1 = createElement('img');
user_image_1.src = "/images/user1.jpg";
item_1_image.appendChild(user_image_1);
const item_1_detail = createElement('div');
const item_1_text = createElement('p');
const item_1_user_name = createElement('strong');
item_1_text.textContent = "Grasshopper showed me that no matter what or who or how I look, anyone can learn how to code. It’s exciting. It opens up a whole new world for me."
item_1_user_name.textContent = "Ismael";
item_1_image.classList.add('stories-item-image');
item_1_detail.classList.add('stories-item-detail');
item_1_detail.append(item_1_text, item_1_user_name);
stories_item_1.append(item_1_image, item_1_detail);

const item_1_image_clone = createElement('div');
const user_image_1_clone = createElement('img');
user_image_1_clone.src = "/images/user1.jpg";
item_1_image_clone.appendChild(user_image_1_clone);
const item_1_detail_clone = createElement('div');
const item_1_text_clone = createElement('p');
const item_1_user_name_clone = createElement('strong');
item_1_text_clone.textContent = "Grasshopper showed me that no matter what or who or how I look, anyone can learn how to code. It’s exciting. It opens up a whole new world for me."
item_1_user_name_clone.textContent = "Ismael";
item_1_image_clone.classList.add('stories-item-image');
item_1_detail_clone.classList.add('stories-item-detail');
item_1_detail_clone.append(item_1_text_clone, item_1_user_name_clone);
stories_item_1_clone.append(item_1_image_clone, item_1_detail_clone);

//item 2
const item_2_image = createElement('div');
const user_image_2 = createElement('img');
user_image_2.src = "/images/user2.jpg";
item_2_image.appendChild(user_image_2);
const item_2_detail = createElement('div');
const item_2_text = createElement('p');
const item_2_user_name = createElement('strong');
item_2_text.textContent = "I like Grasshopper because it allows anyone with or without experience in coding to jump right in and have fun along the way."
item_2_user_name.textContent = "Brianna";
item_2_image.classList.add('stories-item-image');
item_2_detail.classList.add('stories-item-detail');
item_2_detail.append(item_2_text, item_2_user_name);
stories_item_2.append(item_2_image, item_2_detail);

const item_2_image_clone = createElement('div');
const user_image_2_clone = createElement('img');
user_image_2_clone.src = "/images/user2.jpg";
item_2_image_clone.appendChild(user_image_2_clone);
const item_2_detail_clone = createElement('div');
const item_2_text_clone = createElement('p');
const item_2_user_name_clone = createElement('strong');
item_2_text_clone.textContent = "I like Grasshopper because it allows anyone with or without experience in coding to jump right in and have fun along the way."
item_2_user_name_clone.textContent = "Brianna";
item_2_image_clone.classList.add('stories-item-image');
item_2_detail_clone.classList.add('stories-item-detail');
item_2_detail_clone.append(item_2_text_clone, item_2_user_name_clone);
stories_item_2_clone.append(item_2_image_clone, item_2_detail_clone);
//item 3
const item_3_image = createElement('div');
const user_image_3 = createElement('img');
user_image_3.src = "/images/user3.jpg";
item_3_image.appendChild(user_image_3);
const item_3_detail = createElement('div');
const item_3_text = createElement('p');
const item_3_user_name = createElement('strong');
item_3_text.textContent = "Grasshopper helped me achieve basic understanding of coding. Now, I know that I can see myself in this field."
item_3_user_name.textContent = "Zhamal";
item_3_image.classList.add('stories-item-image');
item_3_detail.classList.add('stories-item-detail');
item_3_detail.append(item_3_text, item_3_user_name);
stories_item_3.append(item_3_image, item_3_detail);

//item 4
const item_4_image = createElement('div');
const user_image_4 = createElement('img');
user_image_4.src = "/images/user4.jpg";
item_4_image.appendChild(user_image_4);
const item_4_detail = createElement('div');
const item_4_text = createElement('p');
const item_4_user_name = createElement('strong');
item_4_text.textContent = "This is the most user-friendly interactive app [where] challenges are structured like fill-in-the-blanks puzzles [and] animations and confetti ... demonstrate how code can bring things to life."
item_4_user_name.textContent = "Alverson";
item_4_image.classList.add('stories-item-image');
item_4_detail.classList.add('stories-item-detail');
item_4_detail.append(item_4_text, item_4_user_name);
stories_item_4.append(item_4_image, item_4_detail);

const item_4_image_clone = createElement('div');
const user_image_4_clone = createElement('img');
user_image_4_clone.src = "/images/user4.jpg";
item_4_image_clone.appendChild(user_image_4_clone);
const item_4_detail_clone = createElement('div');
const item_4_text_clone = createElement('p');
const item_4_user_name_clone = createElement('strong');
item_4_text_clone.textContent = "This is the most user-friendly interactive app [where] challenges are structured like fill-in-the-blanks puzzles [and] animations and confetti ... demonstrate how code can bring things to life."
item_4_user_name_clone.textContent = "Alverson";
item_4_image_clone.classList.add('stories-item-image');
item_4_detail_clone.classList.add('stories-item-detail');
item_4_detail_clone.append(item_4_text_clone, item_4_user_name_clone);
stories_item_4_clone.append(item_4_image_clone, item_4_detail_clone);

//set class
slider_list.classList.add('slider-list');
stories_item_1.classList.add('stories-item', 'stories-item-1', 'stories-item-center');
stories_item_2.classList.add('stories-item', 'stories-item-2');
stories_item_3.classList.add('stories-item', 'stories-item-3');
stories_item_4.classList.add('stories-item', 'stories-item-4');
stories_item_1_clone.classList.add('stories-item', 'stories-item-1');
stories_item_2_clone.classList.add('stories-item', 'stories-item-2');
stories_item_4_clone.classList.add('stories-item', 'stories-item-4');

slider_list.append(stories_item_4_clone, stories_item_1, stories_item_2, stories_item_3, stories_item_4, stories_item_1_clone, stories_item_2_clone);
stories_slider.appendChild(slider_list);
//stories_main/pagination
const pagination_list_container = createElement('ul');
const pagination_list_1 = createElement('li');
const pagination_list_2 = createElement('li');
const pagination_list_3 = createElement('li');
const pagination_list_4 = createElement('li');

//set classes
pagination_list_container.classList.add('pagination-list-container');
pagination_list_1.classList.add('pagination-list');
pagination_list_2.classList.add('pagination-list');
pagination_list_3.classList.add('pagination-list');
pagination_list_4.classList.add('pagination-list');

//set ids
pagination_list_1.setAttribute('id', 'page-1');
pagination_list_2.setAttribute('id', 'page-2');
pagination_list_3.setAttribute('id', 'page-3');
pagination_list_4.setAttribute('id', 'page-4');

pagination_list_container.append(pagination_list_1, pagination_list_2, pagination_list_3, pagination_list_4);
stories_pagination.appendChild(pagination_list_container);

stories_main_div.append(stories_heading, stories_slider, stories_pagination);
stories_section.appendChild(stories_main_div);
body.append(stories_section);

// main functionality stories slider
const slides = Array.from(slider_list.children);
const pagination = Array.from(pagination_list_container.children);

const currentSlide = slider_list.querySelector('.stories-item-center');
const { left, width } = currentSlide.getBoundingClientRect();
let mid = Math.abs((innerWidth / 2) - (left + width / 2));
slider_list.style.transform = `translate3d(-${mid}px,0px,0px)`;
pagination[0].classList.add('active-pagination-dot');

function removeAndAddClass(index) {
    slides.forEach((slide) => {
        slide.classList.remove('stories-item-center');
    })
    slides[Number(index) + 1].classList.add('stories-item-center');
    if (Number(index) === 0) {
        stories_item_1.style.transition = null;
    } else {
        slides[Number(index) + 1].setAttribute('style', 'transition:all 1000ms ease-in');
    }
    pagination.forEach((page) => {
        page.classList.remove('active-pagination-dot');
    })
    index === 4 ?
        pagination[0].classList.add('active-pagination-dot') :
        pagination[index].classList.add('active-pagination-dot');
}

function slide(currentSlideIndex) {
    removeAndAddClass(currentSlideIndex);
    let moveSlide = ((width + 30) * Number(currentSlideIndex)) + mid;
    slider_list.style.transition = `transform 1000ms ease-in`;
    slider_list.style.transform = `translate3d(-${moveSlide}px,0px,0px)`;
}

let slideIndex = 1;
const autoSlide = () => {
    if (slideIndex === 5) {
        slider_list.style.transition = null;
        removeAndAddClass(0);
        slider_list.style.transform = `translate3d(-${mid - 8}px,0px,0px)`;
        slideIndex = 1;
        return;
    }
    slide(slideIndex);
    slideIndex++;
}

let interval = setInterval(autoSlide, 3000);

slider_list.addEventListener('mouseover', () => {
    clearInterval(interval);
})

slider_list.addEventListener('mouseout', () => {
    interval = setInterval(autoSlide, 3000);
})

pagination.forEach((page, index) => {
    page.addEventListener('click', () => {
        slide(index);
        slideIndex = index;
        clearInterval(interval);
        interval = setInterval(autoSlide, 3000);
    })
})

// <!--------------------------------->
//*    Learn to Code section
// <!--------------------------------->
const learn_to_code_section = createElement('section');
const left_grasshopper_image = createElement('div');
const mid_learn_to_code = createElement('div');
const right_devices_image = createElement('div');

//classes and Ids
learn_to_code_section.setAttribute('id', 'lear-to-code');
left_grasshopper_image.classList.add('left-grasshopper-image');
mid_learn_to_code.classList.add('mid-lear-to-code');
right_devices_image.classList.add('right-devices-image');

//left grasshopper image
const grasshopper_meditate_image = createElement('img');
grasshopper_meditate_image.src = '/images/grasshopper__practice__meditate.svg';

left_grasshopper_image.append(grasshopper_meditate_image);

//mid learn to code
const learn_to_code_headline = createElement('h2');
const learn_to_code_paragraph = createElement('p');
learn_to_code_headline.textContent = "Learn to code anywhere.";
learn_to_code_paragraph.textContent = "Grasshopper is available on Android and all web browsers. Your progress syncs seamlessly between devices.";

mid_learn_to_code.append(learn_to_code_headline, learn_to_code_paragraph);

//right devices image
const right_three_devices_image = createElement('img');
right_three_devices_image.src = '/images/devices.svg';
right_devices_image.append(right_three_devices_image);

learn_to_code_section.append(left_grasshopper_image, mid_learn_to_code, right_devices_image);
body.append(learn_to_code_section);

// <!--------------------------------->
//*    Features section
// <!--------------------------------->

const features_data = [
    {
        icon: '/images/icon1_visual_puzzles.png',
        text: "Visual puzzles develop your problem-solving skills and solidify coding concepts",
        img: '/images/slide__device-screen-1.png'
    },
    {
        icon: '/images/icon2_industry_standard.png',
        text: "Use industry-standard JavaScript with just a few taps on your phone.",
        img: '/images/slide__device-screen-2.png'
    },
    {
        icon: '/images/icon3_feedback.png',
        text: "Real-time feedback guides you like a teacher.",
        img: '/images/slide__device-screen-3.png'
    },
    {
        icon: '/images/icon4_achievements.png',
        text: "Collect achievements as you learn new skills.",
        img: '/images/slide__device-screen-4.png'
    },
    {
        icon: '/images/icon5_laptop_tablet.png',
        text: "Put your learning into practice with full projects on your laptop or tablet.",
        img: '/images/slide__device-screen-laptop.png'
    },

]
const features_section = createElement('section');
const features_main_content = createElement('div');

//feature main content 
const content_left_main_container = createElement('div');
const content_right_div = createElement('div');

const left_container_content_boxes = createElement('div');

//left div
const left_contents = [];
const features_icons = [];
const features_contents = [];

for (let i = 0; i < features_data.length; i++) {
    //left container
    left_contents.push(createElement('div'));
    features_icons.push(createElement('img'));
    features_contents.push(createElement('p'));
    features_icons[i].src = features_data[i].icon;
    features_contents[i].textContent = features_data[i].text;
    left_contents[i].append(features_icons[i], features_contents[i]);
    left_contents[i].classList.add('left-content-box');
    left_container_content_boxes.append(left_contents[i]);
}

left_contents[0].classList.add('show');

const feature_pagination_list_container = createElement('ul');
const feature_pagination_list_1 = createElement('li');
const feature_pagination_list_2 = createElement('li');
const feature_pagination_list_3 = createElement('li');
const feature_pagination_list_4 = createElement('li');
const feature_pagination_list_5 = createElement('li');


feature_pagination_list_container.append(feature_pagination_list_1, feature_pagination_list_2, feature_pagination_list_3, feature_pagination_list_4, feature_pagination_list_5);
content_left_main_container.append(left_container_content_boxes, feature_pagination_list_container);
//right div
const right_contents = [];
const slide_images = [];
for (let i = 0; i < features_data.length; i++) {
    slide_images.push(createElement('img'));
    slide_images[i].src = features_data[i].img;
    right_contents.push(createElement('div'));
    right_contents[i].append(slide_images[i]);
    right_contents[i].classList.add('right-content-box');
    content_right_div.append(right_contents[i]);
}

right_contents[0].classList.add('show');

//set classes
features_section.setAttribute('id', 'features-section');
features_main_content.classList.add('features-main-content');
left_container_content_boxes.classList.add('features-left-content-boxes');
content_left_main_container.classList.add('features-left-content');
content_right_div.classList.add('features-right-content');
feature_pagination_list_container.classList.add('pagination-list-container', 'feature-pagination');
feature_pagination_list_1.classList.add('pagination-list');
feature_pagination_list_2.classList.add('pagination-list');
feature_pagination_list_3.classList.add('pagination-list');
feature_pagination_list_4.classList.add('pagination-list');
feature_pagination_list_5.classList.add('pagination-list');
features_main_content.append(content_left_main_container, content_right_div);
features_section.append(features_main_content);
body.append(features_section);

const feature_pagination = Array.from(feature_pagination_list_container.children);

function feature_slide(currentSlideIndex) {
    left_contents.forEach(left_content => left_content.classList.remove('show'));
    left_contents[currentSlideIndex].classList.add('show');
    right_contents.forEach((right_content, index) => {
        right_content.classList.remove('show');
        if (index === 3 || index === 4) {
            right_content.style.transition = null;
        } else {
            right_content.style.transition = 'all 1000ms ease-in';
        }
    });
    right_contents[currentSlideIndex].classList.add('show');
    feature_pagination.forEach((page) => {
        page.classList.remove('active-pagination-dot');
    })
    feature_pagination[currentSlideIndex].classList.add('active-pagination-dot');
}

let feature_slide_index = 0;
const features_autoSlide = () => {
    if (feature_slide_index === 4) {
        content_right_div.classList.add('feature-right-content-laptop');
    } else {
        content_right_div.style.transition = 'all 1000ms ease-in;'
        content_right_div.classList.remove('feature-right-content-laptop');
    }
    if (feature_slide_index === 5) {
        feature_slide_index = 0;
    }
    feature_slide(feature_slide_index);
    feature_slide_index++;
}

let features_interval = setInterval(features_autoSlide, 3000);

content_right_div.addEventListener('mouseover', () => {
    clearInterval(features_interval);
})

content_right_div.addEventListener('mouseout', () => {
    features_interval = setInterval(features_autoSlide, 3000);
})


feature_pagination.forEach((page, index) => {
    page.addEventListener('click', () => {
        feature_slide(index);
        feature_slide_index = index;
        clearInterval(features_interval);
        features_interval = setInterval(features_autoSlide, 3000);
    })
})

// <!--------------------------------->
//*    programming concept  section
// <!--------------------------------->

const concept_section = createElement('section');
const concept_main_container = createElement('div');
const concept_header = createElement('h2');
// const concept_slide_container = createElement('div');
const concept_slide_row_1 = createElement('div');
const concept_slide_row_2 = createElement('div');
const concept_slide_row_3 = createElement('div');
concept_slider_length = concept_slide_row_1.getBoundingClientRect().width;
concept_header.textContent = "Learn concepts that apply to any programming language";

// set class and id
concept_section.setAttribute('id', 'concept');
concept_main_container.classList.add('concept-main-container');
concept_header.classList.add('concept-header');
// concept_slide_container.classList.add('concept-slide-container');
concept_slide_row_1.classList.add('concept-slide-row');
concept_slide_row_2.classList.add('concept-slide-row', 'concept-slider-row-2');
concept_slide_row_3.classList.add('concept-slide-row');

const first_slider = ["Control flow", "Functions", "Variables", "Object Editing", "Animation", "Callbacks", "Array Methods", "Operator", "Recursion", "String Manipulation", "Loops", "Execution Order", "Function Declaration", "If Statements", "Data Structures", "Variable Scope", "For...Of Loops"];
const second_slider = ["Callbacks", "Array Methods", "Operators", "Recursion", "String Manipulation", "Loops", "Execution Order", "Function Declaration", "If Statements", "Data Structures", "Variable Scope", 'Control Flow', "Functions", "Variables", "Object Editing", "Animation"];
const third_slider = ["Loops", "Execution Order", "Function Declaration", "If Statements", "Data Structures", 'Variable Scope', 'For...Of Loops', 'Control Flow', 'Functions', 'Variables', 'Object Editing', 'Animation', 'Callbacks', 'Array Methods', 'Operators', 'Recursion', 'String Manipulation'];

const concept_row_1 = [];
const concept_row_2 = [];
const concept_row_3 = [];

first_slider.forEach((concepts, index) => {
    concept_row_1.push(createElement('p'));
    concept_row_1[index].textContent = concepts;
    concept_slide_row_1.append(concept_row_1[index]);
})

second_slider.forEach((concepts, index) => {
    concept_row_2.push(createElement('p'));
    concept_row_2[index].textContent = concepts;
    concept_slide_row_2.append(concept_row_2[index]);
})

third_slider.forEach((concepts, index) => {
    concept_row_3.push(createElement('p'));
    concept_row_3[index].textContent = concepts;
    concept_slide_row_3.append(concept_row_3[index]);
})

// concept_slide_container.append(concept_slide_row_1, concept_slide_row_2, concept_slide_row_3);

concept_main_container.append(concept_header, concept_slide_row_1, concept_slide_row_2, concept_slide_row_3);
concept_section.append(concept_main_container);
body.append(concept_section);

// App link section

const app_link_section = createElement('section');
const app_link_content = createElement('div');
const app_link_cloud = createElement('div');
const app_link_grasshopper_mother = createElement('div');

//app link content

const app_link_content_heading = createElement('h2');
const app_links_div = createElement('div');
const app_links_button = createElement('button');
const app_links_google_play_link = createElement('a');
const app_links_google_play_image = createElement('img');

app_link_content_heading.textContent = "Get Started on your adventure in coding with grasshopper.";

app_links_google_play_image.src = '/images/button--google-play.png';
app_links_google_play_link.append(app_links_google_play_image);

app_links_button.textContent = "Get Started";
app_links_div.append(app_links_button, app_links_google_play_link);

app_link_content.append(app_link_content_heading, app_links_div);

//app link cloud
const app_link_cloud_1 = createElement('img');
app_link_cloud_1.src = '/images/section--get-started__cloud.svg';

const app_link_cloud_2 = createElement('img');
app_link_cloud_2.src = '/images/section--get-started__cloud.svg';

app_link_cloud.append(app_link_cloud_1, app_link_cloud_2);


//set classes and ids
app_link_section.setAttribute('id', 'app-link');
app_link_cloud.classList.add('app-link-cloud');
app_link_cloud_1.classList.add('app-link-cloud-1');
app_link_cloud_2.classList.add('app-link-cloud-2');
app_link_content.classList.add('app-link-content');
app_links_div.classList.add('app-links');
app_link_grasshopper_mother.classList.add('app-link-grasshopper-mother');

app_link_section.append(app_link_content, app_link_cloud, app_link_grasshopper_mother);
body.append(app_link_section);


// <!--------------------------------->
//*    Footer section
// <!--------------------------------->

const footer_section = createElement('section');
const footer_main_div = createElement('div');
const footer_links_container = createElement('div');
const footer_links_div_1 = createElement('div');
const footer_links_div_2 = createElement('div');
const footer_links_div_3 = createElement('div');
const footer_text = createElement('div');

//main footer links section
// div 1
const link_1_1 = createElement('a');
link_1_1.textContent = "Home";
const link_1_2 = createElement('a');
link_1_2.textContent = "What is coding";
const link_1_3 = createElement('a');
link_1_3.textContent = "About us";
footer_links_div_1.append(link_1_1, link_1_2, link_1_3);

// div 2
const link_2_1 = createElement('a');
link_2_1.textContent = "Email Us";
const link_2_2 = createElement('a');
link_2_2.textContent = "FAQ";
footer_links_div_2.append(link_2_1, link_2_2);


// div 3
const link_3_1 = createElement('a');
link_3_1.textContent = "Terms of Service";
const link_3_2 = createElement('a');
link_3_2.textContent = "Privacy Policy";
footer_links_div_3.append(link_3_1, link_3_2);

footer_links_container.append(footer_links_div_1, footer_links_div_2, footer_links_div_3);

// footer_text section 
const code_with_google_img = createElement('img');
code_with_google_img.src = '/images/code-with-google.v2.png';
footer_text.append(code_with_google_img);

//set ids and classes
footer_section.setAttribute('id', 'footer');
footer_main_div.classList.add('footer-main');
footer_links_container.classList.add('footer-link-container');
footer_links_div_1.classList.add('footer-links');
footer_links_div_2.classList.add('footer-links');
footer_links_div_3.classList.add('footer-links');
footer_text.classList.add('footer-text');
footer_main_div.append(footer_links_container, footer_text);
footer_section.append(footer_main_div);
body.append(footer_section);

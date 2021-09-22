function create(tipo, atributo, valor){
    let name = document.createElement(tipo);
    name.setAttribute(atributo, valor);  
    return name;          
}

function setText(name ,texto){
    name.textContent = texto;       
}

function createH_P(tipo, texto){
    let name = document.createElement(tipo);
    name.textContent = texto;
    return name;
}

let main = document.createElement('main');
document.body.append(main);

    let header = document.createElement('header');
    main.append(header);

        let nav = document.createElement('nav');
            header.append(nav);

            let div1_nav = create('div', 'class', 'leftNav');
            nav.append(div1_nav);  
            
                let logo = create('img', 'src', '/images/logo.svg');
                div1_nav.append(logo);

            let div2_nav = create('div', 'class', 'rightNav');
            nav.append(div2_nav); 
                
                let p_1 = create('p', 'class', 'navLink');
                setText(p_1,"Features");
                div2_nav.append(p_1);
            
                let p_2 = create('p', 'class', 'navLink');
                setText(p_2,"Team");
                div2_nav.append(p_2);

                let p_3 = create('p', 'class', 'navLink');
                setText(p_3,"Sing");
                div2_nav.append(p_3);

        let section = document.createElement('section');
        header.append(section);

            let div1_sec = create('div', 'class', 'leftSection');
            section.append(div1_sec);

                let h1_sec = createH_P('h1', 'All your files in one secure location, accessible anywhere.');
                div1_sec.append(h1_sec);

                let p_sec = createH_P('p', 'Fylo Stores your most important files in one secure location. Access them wherever youe need, share and collaborate with friends, family and co-workers.');
                div1_sec.append(p_sec);

                let div1_left_sec = create('div', 'class', 'inputs');
                div1_sec.append(div1_left_sec);
            
                    let input_email_div1_left_sec = create('input', 'class', 'headerEmail');
                    input_email_div1_left_sec.setAttribute('type', 'email');
                    input_email_div1_left_sec.setAttribute('placeholder', 'Enter your email...');
                    div1_left_sec.append(input_email_div1_left_sec);

                    let input_submit_div1_left_sec = create('input', 'class', 'headerSubmit');
                    input_submit_div1_left_sec.setAttribute('type', 'button');
                    input_submit_div1_left_sec.setAttribute('value', 'Get Started');
                    div1_left_sec.append(input_submit_div1_left_sec);

            let div2_sec = create('div', 'class', 'rightSection');
            section.append(div2_sec);

    let div_middle = create('div', 'class', 'middle');
    main.append(div_middle);

        let div1_middle = create('div', 'class', 'topMid');
        div_middle.append(div1_middle);

            let div1_div1_middle = create('div', 'class', 'leftTop');
            div1_middle.append(div1_div1_middle);

                let h2_leftTop = createH_P('h2', 'Stay productive, wherever you are');
                div1_div1_middle.append(h2_leftTop);

                let p_leftTop = createH_P('p', 'Never let location be an issue when accessing your files. Fylo has you coverd for of your file storage need. \r\n Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!')
                div1_div1_middle.append(p_leftTop);

                let a_leftTop = create('a', 'class', 'link');
                a_leftTop.setAttribute('target', '_blanck');
                a_leftTop.setAttribute('href', 'https://component-data-storage.vercel.app/');
                a_leftTop.textContent = "See how Fylo works";
                div1_div1_middle.append(a_leftTop);
                let img_arrow = create('img', 'class', 'arrowIcon');
                img_arrow.setAttribute('src', '/images/icon-arrow.svg');
                a_leftTop.append(img_arrow);

                let div_card = create('div', 'class', 'card');
                div1_div1_middle.append(div_card);

                    let div_testimonial = create('div', 'class', 'testimonial');
                    div_card.append(div_testimonial);

                        let p_test = createH_P('p', 'Fylo has improved our team productivity by an order of magnitude. Since making the swicth out team become a well-oiled collaboration machine.');
                        div_testimonial.append(p_test);

                    let div_user = create('div', 'class', 'user');
                    div_card.append(div_user);

                        let img_user = create('img', 'src', '/images/avatar-testimonial.jpg');
                        div_user.append(img_user);

                        let p_user = createH_P('p', 'Founder & CEO, HUNDLE');
                        let strong = createH_P('strong', 'Kyle Burton');
                        div_user.append(p_user);
                        p_user.append(strong);

            let div2_div1_middle = create('div', 'class', 'rightTop');
            div1_middle.append(div2_div1_middle);

        let div2_middle = create('div', 'class', 'bottomMid');
        div_middle.append(div2_middle);

            let div1_bottom = create('div', 'class', 'leftBottom');
            div2_middle.append(div1_bottom);

                let h2_leftBottom = createH_P('h2', 'Get early acces today');
                div1_bottom.append(h2_leftBottom);

                let p_leftBottom = createH_P('p', 'It only takes a minute to sing up and our free sterted tier is  extremly generous. If you have any question, our support team  would be happy to help you.');
                div1_bottom.append(p_leftBottom);

            let div2_bottom = create('div', 'class', 'rightBottom');
            div2_middle.append(div2_bottom);

                let input_email_div2_bottom = create('input', 'class', 'email');
                input_email_div2_bottom.setAttribute('type', 'email');
                input_email_div2_bottom.setAttribute('placeholder', 'example@email.com');
                div2_bottom.append(input_email_div2_bottom);

                let input_submit_div2_bottom = create('input', 'class', 'submit');
                input_submit_div2_bottom.setAttribute('type', 'button');
                input_submit_div2_bottom.setAttribute('value', 'Get Started For Free');
                div2_bottom.append(input_submit_div2_bottom);

    let footer = document.createElement('footer');
    main.append(footer); 

        let div1_f = create('div', 'class', 'leftF');
        div1_f.setAttribute('class', 'leftF');

            let p_div1_f = createH_P('p', 'Phone: +1-553-123-4567');
            let img_p = create('img', 'src', '/images/icon-phone.svg');
            p_div1_f.append(img_p);
            div1_f.append(p_div1_f);

         





    


        























let main = document.createElement('main');
document.body.append(main);

    let header = document.createElement('header');
    main.append(header);

            let nav = document.createElement('nav');
            header.append(nav);

                let div1_nav = document.createElement('div');
                div1_nav.setAttribute('class', 'leftNav');
                nav.append(div1_nav);

                    let logo = document.createElement('img');
                    logo.setAttribute('src', '/images/logo.svg');
                    div1_nav.append(logo);

                let div2_nav = document.createElement('div');
                div2_nav.setAttribute('class', 'rightNav');
                nav.append(div2_nav);

                    let p = document.createElement('p');
                    p.setAttribute('class', 'navLink');            

                    let p_1 = p.cloneNode(true);
                    p_1.textContent = "Features";
                    div2_nav.append(p_1)

                    let p_2 = p.cloneNode(true);
                    p_2.textContent = "Team";
                    div2_nav.append(p_2)

                    let p_3 = p.cloneNode(true);
                    p_3.textContent = "Sing In"
                    div2_nav.append(p_3)

        let section = document.createElement('section');
        header.append(section);

            let div1_sec = document.createElement('div');
            div1_sec.setAttribute('class', 'leftSection');
            section.append(div1_sec);

                let h1_sec = document.createElement('h1');
                h1_sec.textContent = "All your files in one secure location, accessible anywhere.";
                div1_sec.append(h1_sec);

                let p_sec = document.createElement('p');
                p_sec.textContent = "Fylo Stores your most important files in one secure location. Access them wherever youe need, share and collaborate with friends, family and co-workers.";
                div1_sec.append(p_sec);

                let div1_left_sec = document.createElement('div');
                div1_left_sec.setAttribute('class', 'inputs');
                div1_sec.append(div1_left_sec);

                    let input_email_div1_left_sec = document.createElement('input');
                    input_email_div1_left_sec.setAttribute('type', 'email');
                    input_email_div1_left_sec.setAttribute('class', 'headerEmail');
                    input_email_div1_left_sec.setAttribute('placeholder', 'Enter your email...');
                    div1_left_sec.append(input_email_div1_left_sec);

                    let input_submit_div1_left_sec = document.createElement('input');
                    input_submit_div1_left_sec.setAttribute('type', 'button');
                    input_submit_div1_left_sec.setAttribute('class', 'headerSubmit');
                    input_submit_div1_left_sec.setAttribute('value', 'Get Started');
                    div1_left_sec.append(input_submit_div1_left_sec);

            let div2_sec = document.createElement('div');
            div2_sec.setAttribute('class', 'rightSection');
            section.append(div2_sec);

    let div_middle = document.createElement('div');
    div_middle.setAttribute('class', 'middle');
    main.append(div_middle);

        let div1_middle = document.createElement('div');
        div1_middle.setAttribute('class', 'topMid');
        div_middle.append(div1_middle);

            let div1_div1_middle = document.createElement('div');
            div1_div1_middle.setAttribute('class', 'leftTop');
            div1_middle.append(div1_div1_middle);

                let h2_leftTop = document.createElement('h2');
                div1_div1_middle.append(h2_leftTop);
                h2_leftTop.textContent = "Stay productive, wherever you are";

                let p_leftTop = document.createElement('p');
                div1_div1_middle.append(p_leftTop);
                p_leftTop.textContent = "Never let location be an issue when accessing your files. Fylo has you coverd for of your file storage need. \r\n"
                + "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!";

                let a_leftTop = document.createElement('a');
                a_leftTop.setAttribute('class', 'link');
                a_leftTop.setAttribute('target', '_blanck');
                a_leftTop.setAttribute('href', 'https://component-data-storage.vercel.app/');
                a_leftTop.textContent = "See how Fylo works";
                div1_div1_middle.append(a_leftTop);
                let img_arrow = document.createElement('img');
                img_arrow.setAttribute('src', '/images/icon-arrow.svg');
                img_arrow.setAttribute('class', 'arrowIcon');
                a_leftTop.append(img_arrow);

                let div_card = document.createElement('div');
                div_card.setAttribute('class', 'card');
                div1_div1_middle.append(div_card);

                    let div_testimonial = document.createElement('div');
                    div_testimonial.setAttribute('class', 'testimonial');
                    div_card.append(div_testimonial);

                        let p_test = document.createElement('p');
                        p_test.textContent = "Fylo has improved our team productivity by an order of magnitude. Since making the swicth out team become a well-oiled collaboration machine.";
                        div_testimonial.append(p_test);
                        

                    let div_user = document.createElement('div');
                    div_user.setAttribute('class', ' user');
                    div_card.append(div_user);

                        let img_user = document.createElement('img');
                        img_user.setAttribute('src', '/images/avatar-testimonial.jpg');
                        div_user.append(img_user);

                        let p_user = document.createElement('p');
                        let strong = document.createElement('strong');
                        strong.textContent = "Kyle Burton";
                        p_user.textContent = " Founder & CEO, HUNDLE";
                        div_user.append(p_user);
                        p_user.append(strong);

            let div2_div1_middle = document.createElement('div');
            div2_div1_middle.setAttribute('class', 'rightTop');
            div1_middle.append(div2_div1_middle);
        
        let div2_middle = document.createElement('div');
        div2_middle.setAttribute('class', 'bottomMid');
        div_middle.append(div2_middle);

            let div1_bottom = document.createElement('div');
            div1_bottom.setAttribute('class', 'leftBottom');
            div2_middle.append(div1_bottom);

                let h2_leftBottom = document.createElement('h2');
                h2_leftBottom.textContent = "Get early acces today";
                div1_bottom.append(h2_leftBottom);

                let p_leftBottom = document.createElement('p');
                p_leftBottom.textContent = "It only takes a minute to sing up and our free sterted tier is  extremly generous." +
                "If you have any question, our support team  would be happy to help you.";
                div1_bottom.append(p_leftBottom);

            let div2_bottom = document.createElement('div');
            div2_bottom.setAttribute('class', 'rightBottom');
            div2_middle.append(div2_bottom);

                let input_email_div2_bottom = document.createElement('input');
                input_email_div2_bottom.setAttribute('type', 'email');
                input_email_div2_bottom.setAttribute('class', 'email');
                input_email_div2_bottom.setAttribute('placeholder', 'example@email.com');
                div2_bottom.append(input_email_div2_bottom);

                let input_submit_div2_bottom = document.createElement('input');
                input_submit_div2_bottom.setAttribute('type', 'button');
                input_submit_div2_bottom.setAttribute('class', 'submit');
                input_submit_div2_bottom.setAttribute('value', 'Get Started For Free');
                div2_bottom.append(input_submit_div2_bottom);

    let footer = document.createElement('footer');
    main.append(footer);

        let div1_f = document.createElement('div');
        div1_f.setAttribute('class', 'leftF');

            let p_div1_f = document.createElement('p');
            let img_p = document.createElement('img');
            img_p.setAttribute('class', 'iconLeft');
            img_p.setAttribute('src', '/images/icon-phone.svg');
            p_div1_f.textContent = "Phone: +1-553-123-4567";
            p_div1_f.append(img_p);
            div1_f.append(p_div1_f);

            let p1_div1_f = document.createElement('p');
            let img2_p = document.createElement('img');
            img2_p.setAttribute('class', 'iconLeft');
            img2_p.setAttribute('src', '/images/icon-email.svg');
            p1_div1_f.textContent = "Example@email.com";
            p1_div1_f.append(img2_p);
            div1_f.append(p1_div1_f);

            
            
        let div2_f = document.createElement('div');
        div2_f.setAttribute('class', 'leftMid');

            let p_f = document.createElement('p');
            p_f.setAttribute('class', 'textLeftMid');

            let p_f_1 = p_f.cloneNode(true);

            let p_f_2 = p_f.cloneNode(true);

            let p_f_3 = p_f.cloneNode(true);
            
            let p_f_4 = p_f.cloneNode(true);

            
        /*
        let p = document.createElement('p');
        p.setAttribute('class', 'navLink');            

        let p_1 = p.cloneNode(true);
        p_1.textContent = "Features";
        div2_nav.append(p_1)

        let p_2 = p.cloneNode(true);
        p_2.textContent = "Team";
        div2_nav.append(p_2)

        let p_3 = p.cloneNode(true);
        p_3.textContent = "Sing In"
        div2_nav.append(p_3)

        */

                

        let div3_f = document.createElement('div');
        div3_f.setAttribute('class', 'rightMid');        

        let div4_f = document.createElement('div');
        div4_f.setAttribute('class', 'rightF');



        footer.append(div1_f);
        footer.append(div2_f);
        footer.append(div3_f);
        footer.append(div4_f);










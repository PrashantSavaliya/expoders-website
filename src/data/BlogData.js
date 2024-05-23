import automation_img from '../assets/blog_images/automation_img.jpg';
import angular_img from '../assets/blog_images/angular_img.png';
import e_learning_img from '../assets/blog_images/e_learning_img.jpg';
import ui_ux_img from '../assets/blog_images/ui_ux_img.jpg';
import top_skills_img from '../assets/blog_images/top_skills_img.jpeg';

const blogs = [
    {
        id: 1,
        route_url: 'automation',
        title: 'Automation',
        img_name: automation_img,
        img_title: 'How to start your own e-learning platform?',
        description: 'When it comes to delivering an effective learning experience, having a powerful e-Learning platform is key. A great e-Learning platform should provide learners with virtual and remote learning opportunities, as well as easy-to-use user experiences. The success of this platform relies heavily upon the software development process, which requires expertise in building custom e-Learning platforms …'
    },
    {
        id: 2,
        route_url: 'marketing',
        title: 'Marketing',
        img_name: top_skills_img,
        img_title: 'Top skills and technologies to consider learning in 2023?',
        description: 'It’s that time of the year to auto-evaluate your past achievements and set a new bucket list for the upcoming year. It’s important to set smart and measurable goals to achieve growth and prosperity. The key to staying relevant and earning greater pay in the upcoming year is to acquire new, in-demand skill sets, as …'
    },
    {
        id: 3,
        title: 'Mobile Apps',
        route_url: 'mobile-apps',
        img_name: angular_img,
        img_title: 'Angular vs Blazor',
        description: 'When it comes to choosing a technology to develop web applications, two powerful options stand in the market: Angular and Blazor. Both are popular frameworks that have a lot to offer. Angular is a JavaScript-based open-source framework that is used to create single page applications. It’s a great choice for large-scale projects, and it’s also …'
    },
    {
        id: 4,
        route_url: 'ui-ux',
        title: 'UI/UX',
        img_name: ui_ux_img,
        img_title: 'Success factors of Saas solutions',
        description: 'A Saas solution is a business-to-business software, which is a form of software designed for businesses. It allows businesses to communicate with other businesses through a web-based interface. The success of saas solution depends on many factors, including the technology used and its ease of use, as well as the ability to provide all the …'
    },
    {
        id: 5,
        route_url: 'web-development',
        title: 'Web Development',
        img_name: e_learning_img,
        img_title: 'The Rise of AI in Software Development: Unlocking New Possibilities and Challenges',
        description: 'The software development industry is undergoing a major transformation, and artificial intelligence (AI) is at the forefront of this change. With the ability of Expoders Solutions.'
    }
];
const blog_details = [
    { id: 1, imgName: angular_img, title: 'Mobile Apps', description: 'Angular & Blazor' },
    { id: 2, imgName: top_skills_img, title: 'Marketing', description: 'Top skills and technologies to consider learning in 2023?' },
    { id: 3, imgName: ui_ux_img, title: 'UI / UX', description: 'Success factors of Saas solutions' },
    { id: 4, imgName: e_learning_img, title: 'Automation', description: 'How to start your own e-learning platform?' },
    { id: 5, imgName: automation_img, title: 'Automation Web-Development', description: 'The Rise of AI in Software Development: Unlocking New Possibilities and Challenges' },
];

export { blogs, blog_details };
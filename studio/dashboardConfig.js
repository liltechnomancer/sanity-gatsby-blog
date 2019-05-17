export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cdee3799296040171510fed',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-5s51je3p',
                  apiId: 'ac47a474-23c0-40c8-8d10-f833d6bd41fd'
                },
                {
                  buildHookId: '5cdee3799b5afb017b869266',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-n82s5hcz',
                  apiId: 'a33a164e-56f3-4d9f-a2ca-55f1c5807d69'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lvrbrtsn/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-n82s5hcz.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

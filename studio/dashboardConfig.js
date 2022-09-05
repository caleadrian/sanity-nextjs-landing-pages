export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '63160e946702a771b589dcbb',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xghdcaaf',
                  apiId: 'c23c58e6-c85f-47d2-8878-cdfd215759df'
                },
                {
                  buildHookId: '63160e95b38a9571f022c9e9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-n5n2y7h3',
                  apiId: 'ac0ac927-0575-4ae6-ba01-2dec30c8cd73'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/caleadrian/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-n5n2y7h3.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}

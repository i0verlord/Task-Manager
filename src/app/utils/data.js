export const id = () => Math.random().toString(36).substring(2,10);

export const data = {
  "boards": [
    {
      id: id(),
      name: "Roadmap",
      columns: [
        {
          id: id(),
          name: "Now",
          tasks: [
            {
              id: id(),
              title: "Lanch verions one",
              status: "Now"
            },
            {
              id: id(),
              title: "Review early feedback and plan next steps for roadmap",
              status: "Now"
            }
          ]
        },
        {
          id: id(),
          name: "Next",
          tasks: []
        },
        {
          id: id(),
          name: "Later",
          tasks: []
        }
      ]
    }
  ]
}
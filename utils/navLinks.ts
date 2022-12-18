interface NavLink {
  label: string
  page: string
}

const navLinks: NavLink[] = [
  {
    label: 'About',
    page: 'about',
  },
  {
    label: 'Work',
    page: 'work',
  },
  {
    label: 'Writing',
    page: 'writing',
  },
]

export { navLinks }

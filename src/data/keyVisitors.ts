type KeyVisitor = {
  name: string
  avatar?: string
  experience: string[]
  description: string
}

export const keyVisitors: KeyVisitor[] = [
  {
    name: 'John Doe',
    // avatar: '',
    experience: [
      'United States of America',
      'University of California',
      'LG Electronics'
    ],
    description:
      'Dr. John Doe is a professor at the University of California. He has been a doctor for over 10 years and has published numerous articles on the subject of medicine.'
  },
  {
    name: 'Susan Smith',
    // avatar: '',
    experience: [
      'United States of America',
      'University of California',
      'LG Electronics'
    ],
    description:
      'Dr. Jane Doe is a professor at the University of California. She has been a doctor for over 10 years and has published numerous articles on the subject of medicine.'
  },
  {
    name: 'David Johnson',
    // avatar: '',
    experience: [
      'United States of America',
      'University of California',
      'LG Electronics'
    ],
    description:
      'Dr. Professional is a professor at the University of California. He has been a doctor for over 10 years and has published numerous articles on the subject of medicine.'
  }
]

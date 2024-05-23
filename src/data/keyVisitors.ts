type KeyVisitor = {
  name: string
  avatar?: string
  experience: string[]
  title: string
  description: string
}

export const keyVisitors: KeyVisitor[] = [
  {
    name: 'Dong Ma',
    avatar: 'src/assets/speakers/profDongMa.jpg',
    experience: [
      'Singapore Management University',
      'Dr. Dong Ma is currently an Assistant Professor at Singapore Management University. He earned his PhD from the University of New South Wales, Australia, in 2019, followed by a postdoctoral fellowship at the University of Cambridge until 2021. His research interests focus on wearable computing systems, including human-machine interaction, physiological monitoring, and embedded machine learning.'
    ],
    title: 'In-ear Intelligence - From Sensing To Deployment',
    description:
      'Wireless earbuds have recently emerged as a novel platform for wearable-based human sensing. Positioned advantageously at the human ear and equipped with unique sensors such as in-ear microphones, earbuds offer the capability to monitor a variety of human-related parameters. In this talk, I will share our recent progress in using in-ear microphones for human sensing applications, including gesture/activity recognition, user authentication, physiological monitoring, and speech enhancement. These sensing applications typically achieve better performance with deep learning. Therefore, I will discuss our recent work on enabling accurate and affordable deep learning on earbud-scale embedded devices.'
  }
]

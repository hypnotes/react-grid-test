import Ma from '/speakers/profDongMa.jpg'
import Hur from '/speakers/profHurJunbeom.jpg'
import Joo from '/speakers/profJooChanghee.jpg'
import Kim from '/speakers/profKimJinkyu.png'
import KoketsuRodrigues from '/speakers/profTiagoKoketsuRodrigues.jpg'
import Yang from '/speakers/profYangGyeongsik.png'
import Nishiyama from '/speakers/profYuukiNishiyama.png'

export type Speaker = {
  id: number
  name: string
  avatar?: string
  experience: string[]
  title: string
  description: string
}

export const speakers: Speaker[] = [
  {
    id: 1,
    name: 'Dong Ma',
    avatar: Ma,
    experience: [
      'Singapore Management University',
      'Dr. Dong Ma is currently an Assistant Professor at Singapore Management University. He earned his PhD from the University of New South Wales, Australia, in 2019, followed by a postdoctoral fellowship at the University of Cambridge until 2021. His research interests focus on wearable computing systems, including human-machine interaction, physiological monitoring, and embedded machine learning.'
    ],
    title: 'In-ear Intelligence - From Sensing To Deployment',
    description:
      'Wireless earbuds have recently emerged as a novel platform for wearable-based human sensing. Positioned advantageously at the human ear and equipped with unique sensors such as in-ear microphones, earbuds offer the capability to monitor a variety of human-related parameters. In this talk, I will share our recent progress in using in-ear microphones for human sensing applications, including gesture/activity recognition, user authentication, physiological monitoring, and speech enhancement. These sensing applications typically achieve better performance with deep learning. Therefore, I will discuss our recent work on enabling accurate and affordable deep learning on earbud-scale embedded devices.'
  },
  {
    id: 2,
    name: 'Jinkyu Kim',
    avatar: Kim,
    experience: [
      '2015~2019: Ph.D. Dept. of Electrical Engineering and Computer Science, UC Berkeley',
      '2020~2021: Research Scientist, Waymo Research',
      '2021~present: Assistant Professor, Dept. of Computer Science and Engineering, Korea University'
    ],
    title:
      'Efficient Yet Effective Machine Learning Models for Autonomous Mobile Robot and Vehicles',
    description:
      'Self-driving vehicle (and robot) perception and control have made dramatic progress in the last several years, and many auto vendors have pledged large-scale commercialization in a 2-3 year time frame. These controllers use a variety of approaches but recent successes suggest that neural networks will be widely used. There have been a variety of approaches, which depend on the modular perception-prediction-planning-control pipeline, where each module can be built using deep learning methods. In this talk, I will introduce some of recent work on deep learning for autonomous driving at scale and the variety of challenges.'
  },
  {
    id: 3,
    name: 'Junbeom Hur',
    avatar: Hur,
    experience: [
      '2005~2009: Ph.D. Dept. of Computer Science and Engineering, KAIST',
      '2009~2011: Postdoc researcher, Dept. of Computer Science of Engineering, University of Illinois at Urbana-Champaign',
      '2011~2015: Assistant Professor, Dept. of Computer Science and Engineering, Chung-Ang University',
      '2015~present: Professor, Dept of Computer Science and Engineering, Korea University',
      '2021~2022: Visiting Professor, Dept of Computer Science and Engineering, ETH Zurich'
    ],
    title: 'Side-channel attacks on neural networks',
    description:
      'Neural network architecture and parameters are secret information of most of the current AI services. In this study, we will introduce SW-based side-channels using power, frequency, thermal, and memory usage. We then present how such side-channels can be exploited to attack neural networks, and demonstrate their efficacy by extracting hidden architecture of the neural networks in practice.'
  },

  {
    id: 4,
    name: 'Yuuki Nishiyama',
    avatar: Nishiyama,

    experience: [
      'University of Tokyo',
      'Yuuki Nishiyama is an assistant professor at the Center for Spatial Information Science at the University of Tokyo. He obtained M.S.(2014) in Media and Governance from Keio University, and Ph.D. in Media and Governance (2017) from Keio University, respectively. He had worked at Keio University in Japan and the University of Oulu in Finland, as a post-doctoral researcher respectively. He started work at the Institute of Industrial Science in the University of Tokyo as a Research Associate in 2019, and has held his current position since 2022. His current research interests include ubiquitous computing systems, mobile-wearable sensing platforms, and human ability augmentation. He is a member of ACM, IEEE, and Information Processing Society of Japan (IPSJ).'
    ],
    title: 'In-the-wild IoT: Lessons from real-world implementations',
    description:
      'IoT systems have the potential to enrich our lives, yet there are substantial gaps in deploying these systems in real-world environments. In this talk, I will share the lessons learned from the design, implementation, and operation of multiple sensing and intervention IoT platforms (i.e., MOCHA, SFC-GO, and SmileWave), which have been utilized by over 7,000 individuals over the course of three years.'
  },
  {
    id: 5,
    name: 'Gyeongsik Yang',
    avatar: Yang,
    experience: [
      '2017-2019: Ph.D. in Computer Science and Engineering, Korea University',
      '2018: Research Intern, Networking Research Group, Microsoft Research Asia',
      '2019-2023: Postdoctoral Researcher, Korea University',
      '2023-present: Assistant Professor, Department of Computer Science and Engineering, Korea University'
    ],
    title: 'Analysis of Containerized Networking Systems in IoT Devices',
    description:
      'The Internet of Things (IoT) is driving the development of smart industries that demand real-time control through efficient computing infrastructure like edge computing. Our research investigates the computing and communication overhead in IoT devices, focusing on the challenges posed by containers, a key component in edge computing. We identify significant performance bottlenecks in the existing container networking stack and explore possible solutions to improve IoT application latencies and CPU efficiency.'
  },
  {
    id: 6,
    name: 'Tiago Koketsu Rodrigues',
    avatar: KoketsuRodrigues,
    experience: [
      '2015-2017: M.Sc., Graduate School of Information Sciences, Tohoku University',
      '2017-2020: Ph.D., Graduate School of Information Sciences, Tohoku University',
      '2020-present: Assistant Professor, Graduate School of Information Sciences, Tohoku University'
    ],
    title:
      'Safe Deep Learning for Efficient Communication Resource Allocation in 6G Heterogeneous Networks',
    description:
      'Deep learning models are one of the best ways of practically managing complex networks. However, centralizing user data for training models is not safe and causes delays due to needing to send large amounts of often sensitive data. This can be addressed by Federated Learning, using local training and model aggregation to obtain efficient resource allocation policies. In this talk, we will discuss how to bring a safe approach to smart networking solutions and where Federated Learning can help us.'
  },

  {
    id: 7,
    name: 'Changhee Joo',
    avatar: Joo,
    experience: [
      '2000-2005: Ph.D. School of Electrical and Computer Engineering, Seoul National Univ.',
      '2005-2010: Postdoc researcher, Dept of ECE, Purdue Univ. and Dept of CSE, Ohio State Univ.',
      '2010-2011: Assistant professor, Dept of Information and Communication Engineering, KOREATECH',
      '2011-2019: Associate professor, Dept of Computer Science and Engineering, UNIST',
      '2019-present: Professor, Dept of Computer Science and Engineering, Korea Univ.'
    ],
    title: 'Dynamic Adaptive Multimedia Streaming without Feedback',
    description:
      'We introduce a novel Dynamic Autoencoder (DAE) framework that allows for on-demand traffic control of multimedia content through flexible distributed in-network compression. By leveraging dynamic neural network structures, the DAE provides an online means to optimize the trade-off between computational resources and network bandwidth without requiring feedback information. We present the potential of the DAE in dynamic resource allocation to enhance network performance.'
  }
]

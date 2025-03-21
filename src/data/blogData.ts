// Define the BlogPost interface
interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  excerpt: string;
  content: string[];
  coverImage: string;
  relatedProject?: {
    title: string;
    description?: string;
    github?: string;
    videoId?: string;
    imageUrl?: string;
  };
}

// Get all blog posts
export function getBlogPosts(): BlogPost[] {
  return [
    {
      id: 1,
      slug: 'openexchange-sustainable-campus-ecosystems',
      title: 'OpenExchange: Transforming Hostel Life Through Open Source',
      date: '2024-03-15',
      readTime: '5 min',
      tags: ['Go', 'Backend', 'Architecture', 'Sustainability'],
      excerpt: 'How we built OpenExchange to create sustainable peer-to-peer exchange systems for campus communities...',
      coverImage: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      content: [
        'The inspiration for OpenExchange struck unexpectedly—sparked by a casual conversation with a friend. What began as a personal project soon evolved into a solution for a problem that resonated with every hostel resident. In college, nights often turn restless with no one to sleep, and the need for late-night essentials becomes all too real. Whether it was craving a quick snack like maggi, finding a calculator for the next class, or needing a lab coat, the restrictions and limited hostel timings frequently left us stranded.',
        
        'Recognizing a Shared Challenge',
        
        'I noticed that while hostels imposed external restrictions, internal access was still very much alive. Residents were willing to pay a premium for convenience and the goods they needed. This observation led me to create the OpenExchange organization on GitHub, making the project fully open source. By inviting a talented group of first-year coders and innovators, the project rapidly transformed into a collaborative effort—each contribution driving us closer to a complete solution.',
        
        'The Open Source Journey',
        
        'OpenExchange now thrives as a community-driven, open source organization. Contributions from many have paved the way for a platform designed to simplify transactions among hostel residents. While there\'s still work to be done, our team is enthusiastic about releasing the initial version soon. The collaborative spirit behind OpenExchange continues to fuel our progress, and every commit brings us one step closer to revolutionizing how hostel essentials are exchanged.',
        
        'System Flow at a Glance',
        
        'Below is a high-level overview of how the system operates:',
        
        'The system starts with user sign-in, after which users can view and select from a list of hostels. Once a hostel is selected, users can browse items that have been approved by admins. From there, they have three options: buy, sell, or exchange.',
        
        'For buying, users send requests to sellers, who can approve or reject them. If approved, the buyer can see the seller\'s contact information, allowing them to communicate and complete the transaction.',
        
        'To sell items, users submit them for approval. Admins review the submissions and either approve them, making them visible in listings, or reject them, prompting users to modify and resubmit.',
        
        'For exchanges, users can propose item swaps. If the other user approves, contact information is revealed so they can arrange the exchange. If rejected, users return to browsing listings.',
        
        'Technical Implementation',
        
        'Go has become the backbone of our efficient backend system. Its simplicity, strong standard library, and excellent concurrency model make it ideal for services that need to handle high loads efficiently. When designing our Go-based backend, we leverage the language\'s strengths—Goroutines allow us to handle thousands of concurrent connections with minimal overhead, while channels provide a safe way to communicate between them.',
        
        'One of the key advantages of Go for the OpenExchange platform is its compilation to a single binary. This simplifies deployment and eliminates dependency issues that can plague other languages. Error handling in Go is explicit, which contributes to more robust systems. By forcing developers to consider errors at each step, Go helps avoid the "fail silently" problems that can occur in other languages.',
        
        'Looking Ahead',
        
        'The journey of OpenExchange is far from over. With every contribution, we are learning and adapting, ensuring that the platform not only meets the needs of hostel residents but also evolves with them. As we approach our first official release, the community\'s support and the power of open source continue to be our greatest assets.',
        
        'OpenExchange\'s campus-centric approach focuses on creating a tight-knit community of verified users who can exchange goods and services sustainably and efficiently. The hostel-centric listings feature ensures that students can easily find what they need within their immediate community.'
      ],
      relatedProject: {
        title: 'OpenExchange',
        description: 'A non-profit organization fostering sustainable campus ecosystems through peer-to-peer exchange systems.',
        github: 'https://github.com/OpnExc',
        videoId: 'bWNMV9OwQ2k',
        imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      }
    },
    {
      id: 2,
      slug: 'ueb-blockchain-based-energy-trading',
      title: 'UEB: Blockchain-Based Energy Trading Platform',
      date: '2024-02-28',
      readTime: '7 min',
      tags: ['Blockchain', 'Energy', 'P2P Trading'],
      excerpt: 'How we built UEB, a decentralized energy trading platform using blockchain technology and Apache Kafka...',
      coverImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      content: [
        'The UEB (Unified Energy Board) project was born out of the need to create a more efficient, transparent energy market where individuals could trade excess energy directly with each other.',
        'Traditional energy markets involve multiple intermediaries, leading to higher costs and inefficiencies. By using blockchain technology, we created a trustless system that enables peer-to-peer transactions.',
        'Apache Kafka serves as the backbone of our real-time processing system. It handles the high-volume data streams from smart meters and ensures that energy usage and production data is processed without delay.',
        'The blockchain component of UEB uses a custom consensus mechanism optimized for energy trading. Unlike Bitcoin\'s proof-of-work, which consumes massive amounts of energy itself, our system prioritizes efficiency.',
        'One of the most challenging aspects of the project was integrating with physical 3-phase meters. This required developing custom hardware interfaces and ensuring data integrity from the physical world to the digital ledger.',
        
        // New content: Hacktu Hackathon story
        'Hacktu Hackathon: The Journey of Building UEB',
        
        'Participating in our college\'s Hacktu Hackathon was an unforgettable experience—a blend of intense creativity, technological exploration, and a fair share of challenges. Our team set our sights on the energy track, eager to contribute to the evolving world of sustainable energy solutions.',
        
        'The Spark of an Idea: After weeks of brainstorming and iteration, we landed on a concept we named UEB—a peer-to-peer sustainable energy trading platform. The idea was to allow users to trade energy, ideally enabling communities to harness and share renewable energy resources. While the concept held promise, we knew deep down that it wasn\'t a perfect solution. Nonetheless, it was our starting point, and we dove in with determination.',
        
        'Pushing the Boundaries with Technology: In an effort to add an innovative twist to our project, I proposed integrating a low-latency feature to address the issue of 3-phase meters occasionally failing under high loads. Our plan was to use Apache Kafka as both a writer and a reader. The Kafka writer would generate random—but realistic—meter readings, while the reader would channel these values into a Go backend. This backend was tasked with processing tens of thousands of data points, assessing whether the phase was balanced, and if not, broadcasting updates to the frontend via WebSockets. Although this integration was more of a hardware-centric solution, it challenged us to think outside the box and combine software with real-world energy management.',
        
        'The Hard Truth of Practicality: Despite our enthusiasm and technical efforts, it became increasingly clear that our project faced significant practical hurdles. In a peer-to-peer energy trading model, a major obstacle was the existing economic structure—governments typically rely on a substantial 40 percent profit from sustainable energy sources like solar panels. Convincing them to let go of that revenue stream was, and remains, a daunting challenge. Furthermore, the hardware integration aspect of our project underscored that sometimes the dream of innovation is tempered by real-world constraints.',
        
        'Lessons Learned: Though we didn\'t clinch a win at Hacktu, the experience was invaluable. We learned that innovation requires flexibility—it\'s essential to adapt and pivot when you recognize potential pitfalls early on. Great ideas must be weighed against practical implementation and regulatory challenges. And most importantly, collaborating under pressure teaches you more than any classroom can, and every setback is a stepping stone to future success.',
        
        'In the end, our journey with UEB wasn\'t about winning—it was about exploring new frontiers, pushing our technical boundaries, and growing as innovators. The hackathon was a season of growth, experimentation, and learning, and those lessons will undoubtedly influence our future endeavors in the tech world.'
      ],
      relatedProject: {
        title: 'UEB (Unified Energy Board)',
        description: 'A blockchain-based peer-to-peer energy trading platform using Apache Kafka for real-time processing.',
        github: 'https://github.com/lendrik-kumar/hac2u',
        videoId: 'yS8Os6J7KvA',
        imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      }
    },
    {
      id: 3,
      slug: 'bcarbon-read-blockchain-carbon-tracking',
      title: 'B_Carbon_Read: Carbon Tracking in Blockchain Applications',
      date: '2024-01-15',
      readTime: '6 min',
      tags: ['Blockchain', 'Carbon Tracking', 'Sustainability'],
      excerpt: 'How B_Carbon_Read implements carbon emission tracking in blockchain systems for greater environmental accountability...',
      coverImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      content: [
        'As blockchain technology becomes more widespread, its environmental impact has come under increasing scrutiny. B_Carbon_Read was developed to address this concern by tracking carbon emissions associated with blockchain transactions.',
        'The core innovation of our system is the EnvFactor parameter, which is incorporated into each block. This parameter calculates and stores the carbon footprint of the transactions contained within that block.',
        'Implementing carbon tracking in blockchain systems presents unique challenges. We had to balance the additional computational overhead of tracking emissions against the goal of minimizing the system\'s own carbon footprint.',
        'Our approach involves a hybrid model that combines on-chain carbon metrics with off-chain calculations. This gives us the transparency and immutability of blockchain while keeping the system efficient.',
        'The results have been promising - by making carbon emissions visible and attributable, we\'ve seen participants in the book purchase chain actively work to reduce their environmental impact. This demonstrates how transparency can drive positive change.'
      ],
      relatedProject: {
        title: 'B_Carbon_Read',
        description: 'CBR integrates an existing simple task book purchase blockchain with EnvFactor for carbon emission tracking.',
        github: 'https://github.com/vaidikcode/SatHack-B_Carbon_Read',
        videoId: '_7D6FJigGJs',
        imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      }
    },
    {
      id: 4,
      slug: 'my-open-source-journey',
      title: 'My Open Source Journey: Contributing to ORAS, Besu, Jaeger and More',
      date: '2024-04-10',
      readTime: '8 min',
      tags: ['Open Source', 'Java', 'Distributed Systems', 'Career'],
      excerpt: 'My experiences, learnings, and growth from contributing to various open source projects...',
      coverImage: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      content: [
        'My open source journey began with a simple desire to improve my programming skills while making a meaningful impact. I chose Hyperledger Besu as my first project to contribute to, which helped me significantly enhance my Java development skills.',
        
        'The early days were challenging. I spent hours just trying to understand the codebases, setting up development environments, and figuring out how to navigate complex projects. My first pull request was a small documentation fix, but the feeling of accomplishment when it was merged was incredible.',
        
        'As I gained confidence, I moved on to contributing to Jaeger, which introduced me to distributed tracing systems. The technical complexity was higher, but so was the learning curve. I learned about how modern distributed systems monitor performance and track down issues across service boundaries.',
        
        'The ORAS Java SDK project became one of my most significant contributions. Building standardized ways to store and retrieve OCI artifacts taught me not just about cloud-native technologies but also about the importance of API design and backward compatibility.',
        
        'The Checker Framework introduced me to static analysis tools and how they can prevent bugs before code even runs. This was fascinating from both theoretical and practical perspectives, combining elements of type theory with practical software engineering.',
        
        'Looking back, the most valuable aspects of open source contribution weren\'t just the technical skills I gained, but the soft skills as well: communicating effectively with maintainers, writing clear documentation, and learning to give and receive constructive feedback in code reviews.',
        
        'For those looking to start their open source journey, my advice is simple: begin small, be patient with yourself, focus on quality over quantity, and remember that every contribution matters – whether it\'s code, documentation, or helping others in the community.',
        
        'My Open Source Journey: Embracing High-Level Design and Logical Thinking',
        
        'When I first ventured into open source, my mentors made an invaluable point: in the age of large language models (LLMs), low-level design matters less than a solid understanding of high-level design and strong logical thinking. This insight was a game changer for me, guiding my transition from basic coding to mastering architectural concepts and contributing effectively to open-source projects.',
        
        'Shifting Focus: From Low-Level to High-Level Design',
        
        'My journey began with a focus on enhancing my skills in Java. Recognizing the importance of high-level design, I immersed myself in understanding system architectures and logical thinking. With a newfound perspective, my mentors encouraged me to explore the open-source world—a step that expanded my horizons and allowed me to work on diverse projects that spanned multiple programming languages and system designs.',
        
        'Building a Diverse Portfolio',
        
        'Over time, I have actively contributed to several high-impact open-source projects. These contributions have not only honed my technical skills but also deepened my understanding of system design and collaborative development. Here are some highlights from my journey:',
        
        'ORAS Java SDK',
        
        'Enhanced Error Handling: I improved the robustness of the RegistryWireMockTest by implementing advanced error handling and retry mechanisms.',
        
        'Optimized Data Uploads: Introduced the pushChunks functionality to make data uploads more efficient.',
        
        'Stream API Development: Developed new stream API methods, enabling efficient data streaming in Java.',
        
        'Hyperledger Besu',
        
        'Library Upgrade: Upgraded the project to integrate the latest version of the jc-kzg-4844 library, ensuring better performance and compatibility.',
        
        'Error Handling Improvements: Addressed and resolved IllegalArgumentException errors that arose from disabled discovery settings.',
        
        'Code Refactoring: Streamlined the codebase by removing the obsolete getSupportedProtocol() method, simplifying protocol name retrieval.',
        
        'Enhanced Nonce Handling: Modified nonce handling to support integer values for preloaded contracts, making the system more versatile.',
        
        'Transaction Permissioning: Added a new transaction permissioning hook to the PermissioningService interface, enhancing security measures.',
        
        'Jaeger',
        
        'CI Workflow Optimization: Consolidated multiple end-to-end jobs into a single, efficient workflow, greatly enhancing continuous integration processes.',
        
        'Robust Testing: Developed tests that explicitly handle scenarios with duplicate span IDs, ensuring the system\'s resilience.',
        
        'KubeEdge',
        
        'Extensive Testing: Authored over 25 test files to address various bugs and improve overall test coverage. Although these contributions were not merged due to timing, they were later handed over to the current LFX mentee, highlighting the collaborative nature of open source.',
        
        'Looking Ahead',
        
        'My journey in open source has been one of continuous learning and collaboration. From improving critical libraries to contributing to diverse projects, every experience has enriched my understanding of high-level design and logical problem-solving. I am also proud to have been an applicant for the LFX Mentorship program, where I submitted detailed proposals and engaged with a vibrant community of developers.',
        
        'For a comprehensive view of my open source contributions and projects, feel free to visit my GitHub profile.',
        
        'Embracing high-level design has not only helped me grow as a developer but also allowed me to contribute meaningfully to the open source community. I look forward to more opportunities where logical thinking and a strong grasp of system architecture drive innovative solutions in the tech world.'
      ]
    },
    {
      id: 5,
      slug: 'offline-ticketing-system-wip',
      title: 'Developing an Offline Ticketing System: Work in Progress',
      date: '2024-04-25',
      readTime: '6 min',
      tags: ['Work in Progress', 'Offline Systems', 'Go', 'Event Management'],
      excerpt: 'A behind-the-scenes look at building a ticketing system that works without internet connectivity...',
      coverImage: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      content: [
        'Access to reliable internet isn\'t a given everywhere, which is why I\'m currently developing an offline ticketing system for events in areas with limited connectivity. The project was inspired by my experiences at college festivals where internet outages caused significant disruptions to entry and verification processes.',
        'The core challenge we\'re tackling is ticket validation without a centralized, online database. Our solution involves a hybrid approach using digital signatures, local device storage, and offline-first synchronization protocols that update when connectivity is restored.',
        'We\'re building the backend with Go for its excellent performance characteristics and cross-platform compatibility. The system is designed to run on low-cost hardware, from laptops to Android devices with attached thermal printers for on-the-spot ticket issuance.',
        'One of the most interesting technical challenges has been implementing a secure validation mechanism that doesn\'t require internet connectivity. We\'re using a combination of cryptographic techniques including public key infrastructure and QR codes containing signed tickets that can be verified offline.',
        'The system also includes a conflict resolution strategy for when devices reconnect to the network and need to synchronize their local databases. This involves careful tracking of transaction timestamps and idempotent operations to ensure no double-booking or validation errors occur.',
        'While still in development, early field tests at small campus events have been promising. Event staff found the system intuitive to use, and attendees appreciated the faster entry process compared to traditional paper-based or online-only solutions.',
        'Looking ahead, we plan to add features like offline analytics that collect attendance patterns and flow metrics, which can be used by event organizers to improve future events. We\'re also exploring thermal printer integrations for rapid wristband printing at check-in points.'
      ]
    }
  ];
}

// Get related blog posts for a project
export function getProjectRelatedPosts(projectTitle: string): BlogPost[] {
  const allPosts = getBlogPosts();
  return allPosts.filter(post => post.relatedProject?.title === projectTitle);
}

// Export the BlogPost type for use in other files
export type { BlogPost };
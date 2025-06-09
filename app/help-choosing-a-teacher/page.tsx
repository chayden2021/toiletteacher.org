"use client";

export default function HelpChoosingATeacherPage() {
  const teachers = [
    {
      name: "Jesus",
      bio: "The life of Jesus Christ gave birth to Christianity, the largest religion in the world. He is believed by many to be the Son of God and the savior of humanity. His teachings emphasize love, forgiveness, and compassion.",
      image: "/images/jesus.jpg", // Replace with the actual path to the image
    },
    {
      name: "Krishna",
      bio: "In the Hindu tradition, the Bhagavad Gita is one of the most important spiritual texts. It is a dialogue between Arjuna, a warrior who will soon go fight in battle, and his charioteer Krishna, who is human manifestation of God. Krishna provides Arjuna with timeless wisdom and insight into the nature of reality. All quotes featured here are drawn from his words in the Bhagavad Gita, as translated by Eknath Easwaran.",
      image: "/images/krishna.jpg", // Replace with the actual path to the image
    },
    {
      name: "Lao Tzu",
      bio: "Lao Tzu, the ancient Chinese philosopher and writer, is the reputed author of the Tao Te Ching and the founder of Taoism. His teachings focus on living in harmony with the Tao, the fundamental principle of the universe.",
      image: "/images/laotzu.jpg", // Replace with the actual path to the image
    },
    {
      name: "Zhuangzi",
      bio: "Zhuangzi was a Chinese philosopher and mystic whose writings form one of the foundational texts of Daoism, the Zhuangzi. The Zhuangzi is a collection of stories, parables, and philosophical reflections that explore themes of freedom, spontaneity, and living in harmony with the Dao—the natural flow of the universe. Zhuangzi’s teachings invite us to let go of rigid judgments, embrace uncertainty, and see through the illusion of control. ",
      image: "/images/zhuangzi.jpg", // Replace with the actual path to the image
    },
    {
      name: "Eckhart Tolle",
      bio: "Eckhart Tolle is a contemporary spiritual teacher and author of 'The Power of Now' and 'A New Earth.' His teachings focus on cultivating presence and transcending the dysfunction, resulting in inner peace.",
      image: "/images/eckhart.jpg", // Replace with the actual path to the image
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="max-w-4xl mx-auto px-6 py-12 flex-grow">
        <header className="text-center mb-12">
          <h1 className="text-3xl text-gray-900 mb-4">Help Choosing a Teacher</h1>
          <p className="text-lg text-gray-600 italic">
            Take some time to decide which teacher calls to you.
          </p>
        </header>

        <main className="space-y-12">
          {teachers.map((teacher, index) => (
            <section key={index} className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Biography */}
              <div className="flex-1">
                <h2 className="text-2xl text-gray-800 mb-4">{teacher.name}</h2>
                <p className="text-gray-700 leading-relaxed">{teacher.bio}</p>
              </div>

              {/* Image */}
              <div className="flex-shrink-0">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-48 h-48 object-cover rounded-lg shadow-md"
                />
              </div>
            </section>
          ))}
        </main>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6">
        <a href="/" className="text-blue-500 hover:underline">
          Home
        </a>
      </footer>
    </div>
  );
}
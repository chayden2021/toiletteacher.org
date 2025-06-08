"use client";

export default function HelpChoosingATeacherPage() {
  const teachers = [
    {
      name: "Jesus",
      bio: "The life of Jesus Christ gave birth to Christianity, the largest religion in the world. He is believed by many to be the Son of God and the savior of humanity. His teachings emphasize love, forgiveness, and compassion.",
      image: "/images/jesus.jpg", // Replace with the actual path to the image
    },
    {
      name: "Lao Tzu",
      bio: "Lao Tzu, the ancient Chinese philosopher and writer, is the reputed author of the Tao Te Ching and the founder of Taoism. His teachings focus on living in harmony with the Tao, the fundamental principle of the universe.",
      image: "/images/laotzu.jpg", // Replace with the actual path to the image
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
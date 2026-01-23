import ProgrammingPic from "@/assets/images/me/computer.png"
export const ProgrammingIntro = () => {
  return (
    <header className="px-2 gap-3">
      <h2 className="text-left py-2">How Did I Get Into Programming?</h2>
      <div className="text-left text-sm py-4">
        <div className="space-y-4">
          <img
            src={ProgrammingPic}
            alt="me programming"
            className="h-40 w-40 mx-auto mb-4 md:float-left md:mr-6 md:mb-4"
          />

          <p className="text-wrap">
          I honestly had no idea what programming really was until I worked at my first startup.
          My background was mostly in healthcare and nonprofits, so I had very little exposure to
          tech. While I was there, I started working more closely with the product and engineering
          teams—sitting in on QA sessions, joining product feature discussions, and getting a
          surface-level glimpse into things like bug tracking and sprint deployments. At the time,
          I didn’t fully understand what was happening behind the scenes, but I was fascinated by
          it.
        </p>

        <p className="text-wrap">
          After leaving that role, I didn’t have another opportunity to explore programming right
          away. Fast forward to 2024, I wasn’t feeling challenged enough at work, and during my free
          time I wanted to push myself to learn something hard. That “something” ended up being
          programming.
        </p>

        <p>
          Python was the first language I learned, and it felt surprisingly approachable. It’s an
          imperative language, you give the ingredients, write the steps, and tell the computer
          exactly what to do. That structure clicked with me. Like many self-taught developers,
          though, I quickly fell into tutorial hell. I was consuming a lot of content but didn’t
          feel like I was truly building or thinking on my own.
        </p>

        <p>
          Around that time, machine learning and AI were rapidly growing, which pulled me in even
          more. There were so many moving parts, and I loved how much there was to learn. At the
          same time, I knew that understanding the fundamentals mattered—programming language
          concepts, data structures, and algorithms. So I treated it like I was back in school. I
          read textbooks, took notes, worked through exercises, and followed MIT’s open courseware,
          including 6.002 (Computational Thinking and Data Science) and 6.006 (Introduction to
          Algorithms). I watched lectures, completed assignments, and even attempted the exams.
        </p>

        <p>
          Alongside that, I challenged myself with LeetCode problems to reinforce what I was
          learning. What I love most about programming is using foundational knowledge to break
          down a problem into smaller, familiar pieces and then applying solutions step by step. I
          would write everything out—what the problem was asking, the inputs and outputs, the “why”
          behind each approach and keep iterating until it finally clicked. Sometimes it took a
          while, and sometimes it was stressful, but when I truly understood why a solution worked,
          it felt incredibly rewarding.
        </p>

        <p>
          I’m proud of myself for solving over 100 LeetCode problems—all while working full time
          and actively job searching. At the beginning of 2025, I told myself I wanted to prove
          that I could build something real on my own. That’s when my full-stack development
          journey really began.
        </p>

        <p>
          I love programming because it’s challenging, creative, and deeply rooted in problem
          solving and because there’s always another iteration waiting to be made.
        </p>
        <div className="clear-both" />
        </div>
        
      </div>
    </header>
  )
}

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Paragraph({ content }: { content: string }) {
  return (
    <div className="flex flex-col items-center justify-center mt-8 font-Marsden md:mx-72">
      <div dangerouslySetInnerHTML={{__html:content}} className="w-[263px]  md:w-full text-center md:text-left text-white">
      </div>
    </div>
  );
}

export default Paragraph;

/* 
  <span className="text-white text-[13px]  md:text-[32px] font-bold">
          10 minutes of mentoring per day: The optimal way to more happiness and
          better leadership
          <br className="md:hidden" />
          {" "}Mentor 10 minutes per day for at least a 3 month period
          <br />
        </span>
        <span className="text-white text-[13px] md:text-[32px] font-normal">
          <br />
          <br />
          Spotify model recommends 47-50 minutes per day for personal
          reflection, review and learning
          <br />
          <br />
          Regular time for reviews, reflections and learning are already planned
          in the agile organizational models as a constitutive element in the
          daily processes.
          <br />
          <br />
          So there is the so-called “Hack Day” in the &#34;Spotify model&#34;.
          10% of the actual working time should be reserved for the &#34;Hack
          Day&#34; to promote team development, develop new ideas, promote
          knowledge transfer and strengthen team cohesion.
          <br />
          <br />
          With a weekly working time of 35-42 hours, that would be 3.5-4.2 hours
          per week, or the equivalent of around 47-50 minutes per day. Managers
          should take this time for their own reflection, reviews and learning.
          The aim is to remove daily &#34;obstacles&#34;, knowledge transfer,
          continuous improvement of one&apos;s own way of working in a team,
          promotion of team cohesion and personal development.
          <br />
          <br />
          <br />
        </span>
        <span className="text-white text-[13px] md:text-[32px] font-bold">
          Happiness research: Happiness training 14 minutes a day
          <br />
        </span>
        <span className="text-white text-[13px] md:text-[32px] font-normal">
          <br />
          Another recommendation comes from happiness research. Here they
          examined the question: &#34;How do you train managers for a higher
          level of happiness at work?&#34;. The following five &#34;to dos&#34;
          were derived (Achor, 2011):
          <br />
          <br />
        </span>
        <span className="text-white text-[13px] md:text-[32px] font-normal">
          Each day, write down three new things you are grateful for;
          <br />
          Write 2 minutes a day and describe a positive experience you have had
          in the last 24 hours.
          <br />
          Exercise 10 minutes a day;
          <br />
          Meditate for 2 minutes and focus on your breath going in and out;
          <br />
          First thing in the morning, write a quick email thanking or praising a
          member of your team
          <br />
        </span>
        <span className="text-white text-[13px] md:text-[32px] font-normal">
          <br />
        </span>
        <span className="text-white text-[13px] md:text-[32px] font-bold ">
          All in all, this daily happiness training takes around 14 minutes.
          <br />
        </span>
        <span className="text-white text-[13px] md:text-[32px] font-normal">
          <br />
          <br />
          Mental Research: Increase social intelligence with 10 minutes of
          dialogue per day for 3 months
          <br />
          <br />A comprehensive clinical study shows how to promote social
          intelligence. Two people participated in a daily 10-minute exercise in
          which they engaged in dialogue with each other. The task was to
          conduct a conversation in which the change of perspective (role
          exchange), active listening and reflection were practiced. This
          exercise was carried out over 3 months. As a result, a significant
          increase in empathy, social intelligence, self-reflection skills and
          an improvement in self-awareness could be determined. Result of the
          study: Understanding one&apos;s own feelings, intentions and beliefs
          as those of others is a crucial social skill both for our personal
          lives and for coping with the challenges of a globalized world.
          <br />
          <br />
        </span>
        <span className="text-white text-[13px] md:text-[32px] font-bold ">
          <br />
          Better Happiness, Better Leadership: Mentor 10 minutes a day for at
          least a 3 month period
          <br />
        </span>
        <span className="text-white text-[13px] md:text-[32px] font-normal ">
          <br />
          How can the recommendations for more happiness, more empathy, higher
          social intelligence be implemented through personal reflection,
          reviews and learning in a manager&apos;s everyday work?
          <br />
          <br />
        </span>
        <span className="text-white text-[13px] md:text-[32px] font-normal ">
          Mentoring is ideal for this, as it includes the dialogue between
          mentor and mentee and works on the topics presented here.
          <br />
        </span>
        <span className="text-white text-[13px] md:text-[32px] font-normal ">
          <br />
        </span>
        <span className="text-white text-[13px] md:text-[32px] font-bold ">
          How long and how often should this mentoring be carried out?
          <br />
        </span>
        <span className="text-white text-[13px] md:text-[32px] font-normal ">
          <br />
        </span>
        <span className="text-white text-[13px] md:text-[32px] font-normal ">
          The studies show that significant effects can be achieved with a daily
          10-minute use of these instruments over a period of at least 3 months.
          <br />
        </span>
        <span className="text-white text-[13px] md:text-[32px] font-normal ">
          <br />
          <br />
          <br />
          <br />
          Achor, S (2011). The dividend happiness. harvard business review, 6 ,
          2011.
          <br />
          <br />
          Böckler, A., Herrmann, L., Trautwein, FM, Holmes, T., & Singer, T.
          (2017). Know thy selves: Learning to understand oneself increases the
          ability to understand others. Journal of Cognitive Enhancement, 1(2),
          197-209.
          <br />
          <br />
          Engert, V., Kok, BE, Papassotiriou, I., Chrousos, GP, & Singer, T.
          (2017). Specific reduction in cortisol stress reactivity after social
          but not attention-based mental training. Science Advances, 3(10),
          e1700495.
          <br />
          <br />
          Trautwein, FM, Kanske, P., Böckler, A., & Singer, T. (2020).
          Differential benefits of mental training types for attention,
          compassion, and theory of mind. Cognition, 194, 104039.
        </span>
*/

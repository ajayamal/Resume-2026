type HeadingProps = {
  title: string;
};

export const Heading = ({ title }: HeadingProps) => (
  <h2 className="mb-3 uppercase font-bold tracking-widest text-sm2 text-white ">
    {title}
  </h2>
);

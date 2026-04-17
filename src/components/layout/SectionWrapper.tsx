import PlaneGridWrapper from "./PlaneGridWrapper";
export function SectionWrapper({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <PlaneGridWrapper>
      <section className="">
        <PlaneGridWrapper>
          {title && (
            <h2 className="font-heading text-3xl font-semibold tracking-tight">
              {title}
            </h2>
          )}
        </PlaneGridWrapper>
        <PlaneGridWrapper>{children}</PlaneGridWrapper>
      </section>
    </PlaneGridWrapper>
  );
}

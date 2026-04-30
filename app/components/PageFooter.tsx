/**
 * Shared site footer — red bar + copyright + office hours.
 * Used on every page.
 */
export function PageFooter() {
  return (
    <>
      <div className="krc-red-bar" />
      <footer className="krc-section flex flex-col sm:flex-row items-start justify-between py-8 gap-4">
        <p className="krc-body leading-8">Copyright © KR Customs 2021 all rights reserved</p>
        <div className="text-right krc-font uppercase whitespace-nowrap">
          <p className="krc-heading">Office Hours</p>
          <p className="krc-body leading-8">Monday - Saturday before 11am</p>
          <p className="krc-body leading-8">1-360-981-5029</p>
        </div>
      </footer>
    </>
  );
}

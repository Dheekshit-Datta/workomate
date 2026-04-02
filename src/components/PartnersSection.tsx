const PartnersSection = () => (
  <section id="partners" className="py-20 px-6 bg-transparent border-b border-border">
    <div className="max-w-6xl mx-auto">
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-normal text-foreground tracking-tight mb-4">Strategic partners: Microsoft and AWS</h2>
        <p className="text-lg text-muted-foreground font-normal leading-relaxed max-w-3xl md:mx-0 mx-auto">
          We work with the world's largest platforms. Check your provider for more information or start building via their marketplaces.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Microsoft */}
        <div className="skeu-card-dark p-8 flex flex-col justify-between min-h-[350px]">
          <div className="flex-grow flex items-center justify-center py-8">
            <div className="flex items-center gap-3 text-3xl md:text-4xl font-medium text-primary-foreground tracking-tight">
              <div className="grid grid-cols-2 gap-1 w-8 h-8">
                <div className="bg-[#f25022] rounded-[1px]" />
                <div className="bg-[#7fba00] rounded-[1px]" />
                <div className="bg-[#00a4ef] rounded-[1px]" />
                <div className="bg-[#ffb900] rounded-[1px]" />
              </div>
              Microsoft
            </div>
          </div>
          <div className="skeu-card p-6">
            <p className="text-base text-foreground font-normal mb-6 leading-relaxed">
              Deploy the Workomate Agent Platform within Microsoft environments including <strong>Azure AI Foundry</strong> and <strong>M365 Copilot</strong> to see value faster.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="btn-skeu-primary">Read More</button>
              <button className="btn-skeu-secondary">Azure Market</button>
            </div>
          </div>
        </div>

        {/* AWS */}
        <div className="skeu-card-dark p-8 flex flex-col justify-between min-h-[350px]">
          <div className="flex-grow flex items-center justify-center py-8">
            <div className="text-5xl md:text-6xl font-medium text-primary-foreground tracking-tight">aws</div>
          </div>
          <div className="skeu-card p-6">
            <p className="text-base text-foreground font-normal mb-6 leading-relaxed">
              The Workomate Agent Platform is integrated with AWS services including <strong>Amazon Bedrock</strong> and <strong>Amazon Q</strong> to accelerate deployment.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="btn-skeu-primary">Read More</button>
              <button className="btn-skeu-secondary">AWS Market</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PartnersSection;

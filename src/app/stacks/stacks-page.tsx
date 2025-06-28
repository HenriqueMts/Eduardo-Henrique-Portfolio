const StacksPage = () => {
  return (
    <section className="py-10 px-5" id="stacks">
      <h2 className="text-white text-3xl font-bold text-center">Tech Stacks</h2>
      <p className="text-muted-foreground text-lg text-center mt-4 max-w-2xl mx-auto">
        Here are the technologies I work with:
      </p>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col items-center">
          <span className="mt-2 text-sm text-white">Face Recognition</span>
        </div>
      </div>
    </section>
  );
};

export default StacksPage;

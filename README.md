# embed-schmembed

An example of using the [Web Embed Lab](https://github.com/fullstorydev/web-embed-lab) to test whether an embed script causes problems in realistic sites.

Note: Web Embed Lab is currently [built for macOS and linux](https://github.com/fullstorydev/web-embed-lab/releases). For other platforms you'll need to build your own binaries.

Installation:

	# Get embed repo
	git clone git@github.com:TrevorFSmith/embed-schmembed.git
	cd embed-schmembed
	# Install dependencies, including WEL binaries
	npm install
	# Build embed script to test
	npm build 
	# Copy example WEL .env file
	cp node_modules/web-embed-lab/dotenv.example .env
	# Edit .env files with your Browserstack keys

Capture page formulas:

	npm run formulate-wel

Test the embed script in the page formulas:

	npm run run-wel

There's also an example Gruntfile.js for running the same commands:

	grunt run:formulate_wel
	grunt run:run_wel


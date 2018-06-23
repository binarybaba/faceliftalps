## ALPS FACELIFT


Hi!
So glad you're interested in joining the talk. I'll need a couple of
things set up so that you can follow along easily in the talk.

#### Setup
First and foremost, I'll need you to have a sudo access on your linux box.
So get in touch with IT and make sure you have it.

Next up, I'll need you to install `curl` on your system. It's a utility to download
stuff off the internet. The following command will install curl on your system
and using that, we'll install the next stuff.

```
sudo apt-get install curl
```

Now that you have curl, I'll need you to install `nvm`. It's a version manager for Node.js
which we will need.

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.9/install.sh | bash
```
Close the terminal and open it again.

```
nvm install --lts
sudo apt-get install --no-install-recommends yarn
```

To check if everything is fine, running `node -v` should give you the
version number of node and `yarn -v` should give you the version
number for yarn.

If you dont get a version number, reply to the email sent to you and
I'll be happy to help you!

Cheers!

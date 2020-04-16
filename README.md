# redirect

This web app returns 301 redirect from src regexp to destination defined in ```config/default.json``` using [ririd](https://www.npmjs.com/package/@snkattck/ririd).

## adding a redirect

* Open ```config/default.json```
* Add an entry under ```redirectMap``` conforming to the already existing examples. You can add and set the elements ```withPath``` and ```withQs```, which strip paths or query strings when redirecting to the destination. By default, ```withPath``` and ```withQs``` is set to true.

```node  
{
    "defaultRedirect": "https://www.iq.harvard.edu",
    "redirectMap": [
        { "src": "^(.*\\.)cga\\.harvard\\.edu$", "dst": "https://www.gis.harvard.edu", "withPath": false },
    ]
}
```

The above will redirect all requests to http[s]://*.cga.harvard.edu to https://www.gis.harvard.edu stripping the path. Requests to ```http[s]://*.cga.harvard.edu/a/b/c``` are redirected to ```http[s]://*.cga.harvard.edu```.

## deleting a redirect

Remove the element from the array above.

## testing

You can run this localy to test.

Presume you're using the above example.

You need NodeJS installed!

run 

```npm install; npm start```

You only need to run ```npm install``` once or when changes are present in ```package.json``` or lock.

You can now run ```curl``` and check that the redirect works

```bash
curl -o /dev/null -s -w '%{url_effective} %{redirect_url}\n' http://localhost:3000/a/b/c/d -H 'Host: abc.cga.harvard.edu'
http://localhost:3000/a/b/c/d https://www.gis.harvard.edu/a/b/c/d
```

As you can see, the request is successfully redirected.

## deploying to heroku

Typically when we redirect sites, we set the CNAME to www6-vm1.hmdc.harvard.edu or www.hmdc.harvard.edu in the noc portal.

If your tests pass, you can just push to the heroku origin first

```git push origin heroku```

When migrating a redirect to Heroku, you should add the domain

```heroku domains:add any.domain.name```

example

```heroku domains:add cga.harvard.edu```

You can then CNAME ```cga.harvard.edu``` to the Heroku endpoint printed and reload SSL settings every so often until the CNAME is propaated and a  new LetsEncrypt cert is generated by Heroku for the domain.

Then you can test (again) live.


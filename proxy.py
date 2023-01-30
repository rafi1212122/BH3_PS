from mitmproxy import http
from mitmproxy import ctx
from mitmproxy.proxy import layer, layers


def load(loader):
    # ctx.options.web_open_browser = False
    # We change the connection strategy to lazy so that next_layer happens before we actually connect upstream.
    ctx.options.connection_strategy = "lazy"
    ctx.options.upstream_cert = False
    ctx.options.ssl_insecure = True

    
def next_layer(nextlayer: layer.NextLayer):
    ctx.log(
        f"{nextlayer.context=}\n"
        f"{nextlayer.data_client()[:70]=}\n"
    )
    sni = nextlayer.context.client.sni
    if nextlayer.context.client.tls and sni and (sni.endswith("yuanshen.com") or sni.endswith("mihoyo.com") or sni.endswith("hoyoverse.com") or sni.endswith("starrails.com") or sni.endswith("bhsr.com") or sni.endswith("kurogame.com") or sni.endswith("zenlesszonezero.com") or sni.endswith("api.g3.proletariat.com") or sni.endswith("global01.os.honkaiimpact3.com") or sni.endswith("overseas01-appsflyer-report.honkaiimpact3.com") or sni.endswith("westglobal01.honkaiimpact3.com")):
        ctx.log('sni:' + sni)
        nextlayer.context.server.address = ("127.0.0.1", 443)


def request(flow: http.HTTPFlow) -> None:
    # flow.request.scheme = "http"
    
    # pretty_host takes the "Host" header of the request into account
    if flow.request.pretty_url.startswith('http://log-upload-os.mihoyo.com'):
        flow.response = http.Response.make(
            404,  # (optional) status code
            b"404 not found",  # (optional) content
            {"Content-Type": "text/html"}  # (optional) headers
        )
        return

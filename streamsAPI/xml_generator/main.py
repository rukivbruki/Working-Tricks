from mako.template import Template
from mako.runtime import Context


def xml_generator():
    tpl_xml = '''
    <doc>
    % for i in data:
    <p>${i}</p>
    % endfor
    </doc>
    '''

    tpl = Template(tpl_xml)

    with open('bigXml.xml', 'w') as f:
        ctx = Context(f, data=range(1000000))
        tpl.render_context(ctx)


if __name__ == '__main__':
    xml_generator()

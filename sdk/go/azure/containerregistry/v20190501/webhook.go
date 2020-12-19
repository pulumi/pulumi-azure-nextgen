// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190501

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// An object that represents a webhook for a container registry.
type Webhook struct {
	pulumi.CustomResourceState

	// The list of actions that trigger the webhook to post notifications.
	Actions pulumi.StringArrayOutput `pulumi:"actions"`
	// The location of the resource. This cannot be changed after the resource is created.
	Location pulumi.StringOutput `pulumi:"location"`
	// The name of the resource.
	Name pulumi.StringOutput `pulumi:"name"`
	// The provisioning state of the webhook at the time the operation was called.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The scope of repositories where the event can be triggered. For example, 'foo:*' means events for all tags under repository 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to 'foo:latest'. Empty means all events.
	Scope pulumi.StringPtrOutput `pulumi:"scope"`
	// The status of the webhook at the time the operation was called.
	Status pulumi.StringPtrOutput `pulumi:"status"`
	// The tags of the resource.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The type of the resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewWebhook registers a new resource with the given unique name, arguments, and options.
func NewWebhook(ctx *pulumi.Context,
	name string, args *WebhookArgs, opts ...pulumi.ResourceOption) (*Webhook, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Actions == nil {
		return nil, errors.New("invalid value for required argument 'Actions'")
	}
	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.RegistryName == nil {
		return nil, errors.New("invalid value for required argument 'RegistryName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.ServiceUri == nil {
		return nil, errors.New("invalid value for required argument 'ServiceUri'")
	}
	if args.WebhookName == nil {
		return nil, errors.New("invalid value for required argument 'WebhookName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:containerregistry/latest:Webhook"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerregistry/v20170601preview:Webhook"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerregistry/v20171001:Webhook"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerregistry/v20191201preview:Webhook"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerregistry/v20201101preview:Webhook"),
		},
	})
	opts = append(opts, aliases)
	var resource Webhook
	err := ctx.RegisterResource("azure-nextgen:containerregistry/v20190501:Webhook", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetWebhook gets an existing Webhook resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetWebhook(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *WebhookState, opts ...pulumi.ResourceOption) (*Webhook, error) {
	var resource Webhook
	err := ctx.ReadResource("azure-nextgen:containerregistry/v20190501:Webhook", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Webhook resources.
type webhookState struct {
	// The list of actions that trigger the webhook to post notifications.
	Actions []string `pulumi:"actions"`
	// The location of the resource. This cannot be changed after the resource is created.
	Location *string `pulumi:"location"`
	// The name of the resource.
	Name *string `pulumi:"name"`
	// The provisioning state of the webhook at the time the operation was called.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The scope of repositories where the event can be triggered. For example, 'foo:*' means events for all tags under repository 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to 'foo:latest'. Empty means all events.
	Scope *string `pulumi:"scope"`
	// The status of the webhook at the time the operation was called.
	Status *string `pulumi:"status"`
	// The tags of the resource.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource.
	Type *string `pulumi:"type"`
}

type WebhookState struct {
	// The list of actions that trigger the webhook to post notifications.
	Actions pulumi.StringArrayInput
	// The location of the resource. This cannot be changed after the resource is created.
	Location pulumi.StringPtrInput
	// The name of the resource.
	Name pulumi.StringPtrInput
	// The provisioning state of the webhook at the time the operation was called.
	ProvisioningState pulumi.StringPtrInput
	// The scope of repositories where the event can be triggered. For example, 'foo:*' means events for all tags under repository 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to 'foo:latest'. Empty means all events.
	Scope pulumi.StringPtrInput
	// The status of the webhook at the time the operation was called.
	Status pulumi.StringPtrInput
	// The tags of the resource.
	Tags pulumi.StringMapInput
	// The type of the resource.
	Type pulumi.StringPtrInput
}

func (WebhookState) ElementType() reflect.Type {
	return reflect.TypeOf((*webhookState)(nil)).Elem()
}

type webhookArgs struct {
	// The list of actions that trigger the webhook to post notifications.
	Actions []string `pulumi:"actions"`
	// Custom headers that will be added to the webhook notifications.
	CustomHeaders map[string]string `pulumi:"customHeaders"`
	// The location of the webhook. This cannot be changed after the resource is created.
	Location string `pulumi:"location"`
	// The name of the container registry.
	RegistryName string `pulumi:"registryName"`
	// The name of the resource group to which the container registry belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The scope of repositories where the event can be triggered. For example, 'foo:*' means events for all tags under repository 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to 'foo:latest'. Empty means all events.
	Scope *string `pulumi:"scope"`
	// The service URI for the webhook to post notifications.
	ServiceUri string `pulumi:"serviceUri"`
	// The status of the webhook at the time the operation was called.
	Status *string `pulumi:"status"`
	// The tags for the webhook.
	Tags map[string]string `pulumi:"tags"`
	// The name of the webhook.
	WebhookName string `pulumi:"webhookName"`
}

// The set of arguments for constructing a Webhook resource.
type WebhookArgs struct {
	// The list of actions that trigger the webhook to post notifications.
	Actions pulumi.StringArrayInput
	// Custom headers that will be added to the webhook notifications.
	CustomHeaders pulumi.StringMapInput
	// The location of the webhook. This cannot be changed after the resource is created.
	Location pulumi.StringInput
	// The name of the container registry.
	RegistryName pulumi.StringInput
	// The name of the resource group to which the container registry belongs.
	ResourceGroupName pulumi.StringInput
	// The scope of repositories where the event can be triggered. For example, 'foo:*' means events for all tags under repository 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to 'foo:latest'. Empty means all events.
	Scope pulumi.StringPtrInput
	// The service URI for the webhook to post notifications.
	ServiceUri pulumi.StringInput
	// The status of the webhook at the time the operation was called.
	Status pulumi.StringPtrInput
	// The tags for the webhook.
	Tags pulumi.StringMapInput
	// The name of the webhook.
	WebhookName pulumi.StringInput
}

func (WebhookArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*webhookArgs)(nil)).Elem()
}

type WebhookInput interface {
	pulumi.Input

	ToWebhookOutput() WebhookOutput
	ToWebhookOutputWithContext(ctx context.Context) WebhookOutput
}

func (*Webhook) ElementType() reflect.Type {
	return reflect.TypeOf((*Webhook)(nil))
}

func (i *Webhook) ToWebhookOutput() WebhookOutput {
	return i.ToWebhookOutputWithContext(context.Background())
}

func (i *Webhook) ToWebhookOutputWithContext(ctx context.Context) WebhookOutput {
	return pulumi.ToOutputWithContext(ctx, i).(WebhookOutput)
}

type WebhookOutput struct {
	*pulumi.OutputState
}

func (WebhookOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Webhook)(nil))
}

func (o WebhookOutput) ToWebhookOutput() WebhookOutput {
	return o
}

func (o WebhookOutput) ToWebhookOutputWithContext(ctx context.Context) WebhookOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(WebhookOutput{})
}
